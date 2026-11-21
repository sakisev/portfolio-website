/* eslint-disable react/no-unescaped-entities -- copy is kept verbatim from lu-chat/site/privacy.html */
import type { Metadata } from 'next';
import LuChatDoc from '../doc';

export const metadata: Metadata = { title: 'LU Chat Privacy Policy' };

export default function LuChatPrivacyPage() {
    return (
        <LuChatDoc>
            <h1>LU Chat Privacy Policy</h1>
            <p className="text-ash">Last updated: 21 November 2026</p>

            <p>LU Chat is a private app for two people in a relationship: a shared chat, games, lists, a shared pet and a little currency called LU. This policy explains what data the app handles, why, and the choices you have.</p>

            <h2>Who we are</h2>
            <p>LU Chat is made by Sakis Evangelou, an individual developer based in Cyprus, who is the data controller for the app. Contact: <a href="mailto:privacy@sakisev.cy">privacy@sakisev.cy</a>.</p>

            <h2>End-to-end encryption</h2>
            <p>Your most personal content is encrypted on your phone before it leaves it, with a key that only exists on your and your partner's devices. We store it, but we cannot read it. This covers:</p>
            <ul>
                <li>message text and links you send,</li>
                <li>photos and voice notes,</li>
                <li>notes attached to LU you send,</li>
                <li>daily question answers,</li>
                <li>shared lists (titles and items),</li>
                <li>what you write or draw in the emoji riddle, emoji story, draw &amp; guess, and two truths and a lie games.</li>
            </ul>
            <p>Because the key never leaves your devices, losing or resetting your phone can make older encrypted messages unreadable, and we cannot recover them for you.</p>

            <h2>What we collect and why</h2>
            <div className="overflow-x-auto">
                <table>
                    <tbody>
                        <tr><th>Data</th><th>Why</th></tr>
                        <tr><td>Email address, or your Apple ID's email (which can be a private relay address) if you use Sign in with Apple</td><td>To create your account and sign you in. We email you one-time sign-in codes.</td></tr>
                        <tr><td>Your name in the app, and your name from Apple if you choose to share it</td><td>Shown to your partner in the chat, notifications and the wallet.</td></tr>
                        <tr><td>Who you're paired with, invite codes, and when you paired or unpaired</td><td>To connect you with your partner and keep everyone else out.</td></tr>
                        <tr><td>Encrypted content (see above)</td><td>To deliver it to your partner. We can't read it.</td></tr>
                        <tr><td>Content that isn't end-to-end encrypted: activity and reward titles, important dates and their titles, your pet's name and care history, reactions, LU amounts, choices in Would you rather, This or that, How well do you know me and tic-tac-toe, streaks, read receipts and timestamps</td><td>These features need the server to read this information, for example to pay out LU, keep streaks or send reminders. It is only visible to you and your partner, and it is encrypted at rest by our hosting provider.</td></tr>
                        <tr><td>Push notification token</td><td>To send you notifications about your partner's activity. Notifications for encrypted content don't include that content.</td></tr>
                        <tr><td>Your device's encryption public key</td><td>So your partner's app can encrypt messages for you. It cannot be used to read anything on its own.</td></tr>
                        <tr><td>Feedback you choose to send from Settings, with your account ID, phone model, operating system and app version</td><td>To fix bugs and improve the app. Feedback isn't end-to-end encrypted.</td></tr>
                    </tbody>
                </table>
            </div>
            <p>We don't use analytics, advertising or tracking SDKs, we don't sell your data, and we don't use it for advertising or to build profiles. App Lock (Face ID, Touch ID or fingerprint) is handled by your phone; we never receive biometric data. Home-screen widget content is stored only on your device.</p>

            <h2>Legal basis</h2>
            <p>We process this data to provide the app you signed up for (performance of a contract, GDPR Art. 6(1)(b)). Email delivery and security measures such as rate limiting rely on our legitimate interest in keeping the service working and safe (Art. 6(1)(f)).</p>

            <h2>Who processes data for us</h2>
            <ul>
                <li><strong>Supabase</strong> hosts the database, sign-in, file storage and server functions, in the European Union (Ireland).</li>
                <li><strong>Expo</strong> relays push notifications to Apple Push Notification service and Google Firebase Cloud Messaging, and delivers app updates.</li>
                <li><strong>Resend</strong> delivers sign-in code emails.</li>
                <li><strong>Apple</strong>, if you use Sign in with Apple.</li>
                <li><strong>GitHub</strong> stores feedback you send from the app, in our private issue tracker.</li>
                <li><strong>GIPHY</strong>: when you search for GIFs, your search terms go directly from your phone to GIPHY, which also sees your IP address. See GIPHY's privacy policy.</li>
                <li><strong>Link previews</strong>: when you send a link, our server fetches that web page to build a preview card, so the website sees our server rather than your device. The link itself is sent end-to-end encrypted.</li>
            </ul>
            <p>Some of these providers may process data outside the EU under the European Commission's Standard Contractual Clauses or an adequacy decision.</p>

            <h2>How long we keep data</h2>
            <ul>
                <li>Photos are deleted from our servers 15 minutes after your partner views them, or after 7 days if they're never opened. Voice notes are deleted 7 days after they're sent.</li>
                <li>While you're paired, your shared history is kept so you can both see it.</li>
                <li>If you or your partner unpair, the couple's shared history is archived: neither of you can see it anymore, and it isn't shown to anyone you pair with next. It stays stored until the account of whoever wrote it is deleted.</li>
                <li>If you delete your account (Settings &rarr; Delete account, or from the pairing screen), we delete your account, profile and everything you've written or sent, including from an ex-partner's archive. This happens immediately. Feedback you've sent is kept separately in our issue tracker; email us if you'd like it deleted too. Copies in our hosting provider's backups are overwritten within its backup retention period.</li>
            </ul>

            <h2>Your rights</h2>
            <p>Under the GDPR you can ask to access, correct, delete or export your data, and you can object to or ask us to restrict processing. You can change your name in the app and delete your account in the app at any time. For anything else, email <a href="mailto:privacy@sakisev.cy">privacy@sakisev.cy</a>. You can also complain to the Office of the Commissioner for Personal Data Protection in Cyprus (<a href="https://www.dataprotection.gov.cy">dataprotection.gov.cy</a>) or your local data protection authority.</p>

            <h2>Children</h2>
            <p>LU Chat is not intended for anyone under 16, and we don't knowingly collect data from children.</p>

            <h2>Changes</h2>
            <p>If we change this policy, we'll update the date above. If the change is significant, we'll also let you know in the app.</p>
        </LuChatDoc>
    );
}
