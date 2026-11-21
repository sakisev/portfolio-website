/**
 * Uploads LU Chat's demo screenshots and Remotion video to Sanity and attaches them to the project.
 * Re-running is safe: Sanity dedupes identical files by content hash.
 *
 *   (cd video && npm run render && npm run poster)
 *   npx sanity exec scripts/lu-chat-media.ts --with-user-token
 */
import { createReadStream } from 'node:fs';
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2024-08-31' });

const screens = [
    ['video/public/alex-chat.png', 'LU Chat conversation between Alex and Sam with a daily question card'],
    ['video/public/alex-play.png', 'Play tab with the daily question and mini games that earn LU'],
    ['video/public/alex-wallet.png', 'LU wallet showing both balances and shared rewards to redeem'],
    ['video/public/alex-emoji-riddle.png', 'Emoji riddle game with an emoji keyboard'],
] as const;

const upload = (type: 'image' | 'file', path: string) =>
    client.assets.upload(type, createReadStream(path), { filename: path.split('/').pop() });

const gallery = [];
for (const [i, [path, alt]] of screens.entries()) {
    const asset = await upload('image', path);
    gallery.push({ _type: 'image', _key: `screen${i}`, alt, asset: { _type: 'reference', _ref: asset._id } });
}
const video = await upload('file', 'video/out/lu-chat-demo.mp4');
const poster = await upload('image', 'video/out/lu-chat-demo-poster.jpg');

await client
    .patch('project-lu-chat')
    .set({
        gallery,
        video: { _type: 'file', asset: { _type: 'reference', _ref: video._id } },
        videoPoster: { _type: 'image', asset: { _type: 'reference', _ref: poster._id } },
    })
    .commit();
console.log(`Attached ${gallery.length} screenshots, video ${video._id} and poster ${poster._id}.`);
