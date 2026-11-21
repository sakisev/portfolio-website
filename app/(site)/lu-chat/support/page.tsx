/* eslint-disable react/no-unescaped-entities -- copy is kept verbatim from lu-chat/site/support.html */
import type { Metadata } from 'next';
import Link from 'next/link';
import LuChatDoc from '../doc';

export const metadata: Metadata = { title: 'LU Chat Support' };

export default function LuChatSupportPage() {
    return (
        <LuChatDoc>
            <h1>LU Chat Support</h1>
            <p>Questions, bugs or feedback? Email <a href="mailto:support@sakisev.cy">support@sakisev.cy</a> and we'll get back to you as soon as we can, usually within a few days.</p>

            <h2>How do I pair with my partner?</h2>
            <p>After signing in, one of you taps <em>Create my code</em> and shares it. The other enters it under <em>Got a code?</em> and taps <em>Join</em>. Codes are valid for 7 days and work once.</p>

            <h2>I didn't get my sign-in code</h2>
            <p>Check your spam folder for an email from hello@mail.sakisev.cy. Codes expire after an hour, so request a new one if it's been a while.</p>

            <h2>Messages show "could not be decrypted"</h2>
            <p>Messages are end-to-end encrypted with a key stored only on your phone. If you reinstall the app or switch phones, a new key is created, and messages encrypted for the old key can't be read anymore. New messages work normally.</p>

            <h2>How do I unpair?</h2>
            <p>Settings &rarr; Unpair. You both lose access to the shared chat, and it's archived rather than shown to anyone else. You can each pair with someone new afterwards.</p>

            <h2 id="delete-account">How do I delete my account?</h2>
            <p>Settings &rarr; Delete account, or <em>Delete account</em> on the pairing screen. This permanently deletes your account and everything you've sent, and ends your pairing. It can't be undone. If you can't access the app anymore, email <a href="mailto:privacy@sakisev.cy">privacy@sakisev.cy</a> from the address you signed up with and we'll delete it for you.</p>

            <p className="mt-10 text-ash"><Link href="/lu-chat/privacy">Privacy policy</Link></p>
        </LuChatDoc>
    );
}
