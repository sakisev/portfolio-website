/**
 * Brings Sanity content in line with the CV. Idempotent: patches existing docs by ID
 * and createOrReplace's new ones under fixed IDs, so it is safe to re-run.
 *
 *   npx sanity exec scripts/seed-cv.ts --with-user-token            # apply
 *   npx sanity exec scripts/seed-cv.ts --with-user-token -- --dry   # print only
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient({ apiVersion: '2024-08-31' });
const dry = process.argv.includes('--dry');

let k = 0;
const key = () => `k${(k++).toString(36)}`;
const blocks = (...paragraphs: string[]) =>
    paragraphs.map((text) => ({
        _type: 'block',
        _key: key(),
        style: 'normal',
        markDefs: [],
        children: [{ _type: 'span', _key: key(), text, marks: [] }],
    }));
const roles = (...r: [string, string][]) => r.map(([title, period]) => ({ _type: 'role', _key: key(), title, period }));

const EXISTING = {
    ancoria: 'e19f6e12-dbcd-4022-a051-c929a6c182df',
    overflow: '38aa88e1-b58c-40db-a16a-839c3849f53d',
    thisWebsite: '9f4f790b-f77a-480c-b9b2-67e0ed830516',
    header: 'f00a7169-9a02-4db3-af56-400517b7139e',
};

const tx = client.transaction();

// Header bio (CV profile)
tx.patch(EXISTING.header, (p) =>
    p.set({
        content: blocks(
            'Software engineer with 5+ years building web and mobile products in React, TypeScript and Next.js. I lead a team of six at HF Markets, stay hands-on with architecture and real-time systems, and care about mentoring and shipping things that are useful to people.',
        ),
    }),
);

// Career
tx.createOrReplace({
    _id: 'work-hf-markets',
    _type: 'work_experience',
    order: 1,
    company: 'HF Markets',
    years: '2025–now',
    name: 'Software Engineer Team Lead',
    company_position: 'HF Markets - Jan 2025 to present',
    roles: roles(['Software Engineer Team Lead', 'Sept 2025–present'], ['Senior Software Engineer', 'Jan–Sept 2025']),
    highlights: [
        'Lead a team of six senior and mid-level engineers, owning delivery and technical direction for a customer-facing product.',
        'Design and support real-time, high-throughput systems in production.',
        'Introduced architectural, security and performance improvements across the codebase.',
    ],
});
tx.patch(EXISTING.ancoria, (p) =>
    p.set({
        order: 2,
        company: 'Ancoria Bank',
        years: '2023–2024',
        company_position: 'Ancoria Bank - July 2023 to Dec 2024',
        roles: roles(['Mid Level Software Engineer', 'July 2023–Dec 2024']),
        highlights: [
            'Built a high-performance banking web app with React, TypeScript and GraphQL.',
            'Designed an SCSS UI library with 70+ utilities and 25+ components.',
            'Improved mobile app performance by around 30% through refactoring.',
        ],
    }),
);
tx.patch(EXISTING.overflow, (p) =>
    p.set({
        order: 3,
        company: 'Protoio',
        years: '2019–2023',
        roles: roles(
            ['Mid Level Software Engineer', 'Feb 2022–July 2023'],
            ['Software Engineer', 'Jan 2020–Feb 2022'],
            ['Junior Software Engineer', 'Dec 2019–Jan 2020'],
        ),
        highlights: [
            'Shipped features for Overflow with React, TypeScript, Node.js and Electron.',
            'Helped move a legacy component library to a Material UI design system.',
            'Interviewed and onboarded new engineers.',
        ],
    }),
);

// Projects
// Retired projects (removed from the portfolio).
tx.delete('project-workout-companion');
tx.delete('project-agile-plus');
// createIfNotExists + patch so media attached by scripts/lu-chat-media.ts survives re-runs.
tx.createIfNotExists({ _id: 'project-lu-chat', _type: 'project', name: 'LU Chat' });
tx.patch('project-lu-chat', (p) =>
    p.set({
        order: 1,
        name: 'LU Chat',
        href: '/lu-chat',
        status: 'Ongoing',
        short_description:
            'How do you measure love? LU Chat answers with a currency for it: Love Units, earned and spent by two people in a private, end-to-end encrypted app for couples.',
        stack: ['Expo', 'Expo Router', 'TypeScript', 'Supabase', 'NativeWind', 'TanStack Query'],
        content: blocks(
            'How does one measure love? Not in likes, not in read receipts, not in how fast someone texts back. But what if there was a currency for it? LU Chat starts from that question. LU stands for Love Units: a little currency that only two people can earn, and only spend on each other.',
            'Answer the daily question, play a round together, complete an activity, and LU lands in your wallet. Send some to your partner just because. Then spend it on rewards you invent as a couple, from "I pick the movie" to "Skip one chore" to breakfast in bed, so the small gestures that usually go uncounted finally have a balance.',
            'Around that currency sits a space that belongs to the two of you and nobody else: a private chat, mini games, shared lists, the dates that matter, and a pet you raise together. Partners pair their phones with a one-time code, and that is the whole guest list.',
            'Love letters deserve privacy. Messages, photos, voice notes, shared lists, daily answers and the written games are encrypted on the device with libsodium before they leave it, with keys that exist only on the two phones, so the server keeps that content without being able to read it. Photos are deleted from the server shortly after they are viewed, and there are no analytics, ads or tracking SDKs.',
            'Under the hood it is Expo and Expo Router in TypeScript. Supabase provides auth, Postgres with row-level security, Realtime and Edge Functions; TanStack Query and Realtime keep both phones in sync; NativeWind handles light and dark themes; Expo Notifications delivers push; and home-screen widgets keep lists, countdowns and streaks a glance away.',
            'LU Chat opens soon as an invite-only beta on TestFlight and Google Play. Bring your favourite person.',
        ),
    }),
);
tx.patch(EXISTING.thisWebsite, (p) =>
    p.set({
        order: 99, // always last
        status: 'Live',
        stack: ['Next.js', 'Tailwind CSS', 'Sanity'],
        short_description:
            'The portfolio you are reading, built with Next.js and Sanity, and used as a testbed for responsive design and performance work.',
    }),
);

// Skills
const skills: [string, string[]][] = [
    ['Frontend', ['React', 'TypeScript', 'JavaScript', 'Next.js', 'CSS / SCSS', 'Tailwind CSS']],
    ['State', ['Redux', 'MobX State Tree']],
    ['Mobile & desktop', ['React Native', 'Electron']],
    ['Backend & APIs', ['Node.js', 'GraphQL', 'REST']],
    ['Tooling', ['Git', 'Azure Pipelines', 'Jenkins', 'Webpack']],
    ['Also', ['Vue.js']],
];
skills.forEach(([title, items], i) =>
    tx.createOrReplace({
        _id: `skills-${title.toLowerCase().replace(/[^a-z]+/g, '-')}`,
        _type: 'skill_group',
        order: i + 1,
        title,
        items,
    }),
);

if (dry) {
    console.log(JSON.stringify(tx.serialize(), null, 2));
} else {
    const res = await tx.commit();
    console.log(`Committed ${res.results.length} mutations (transaction ${res.transactionId}).`);
}
