import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'LU Chat',
    description: 'Your little corner of the internet, for two',
};

export default function LuChatPage() {
    return (
        <main className='grid min-h-dvh content-center px-4 py-24 sm:px-8'>
            <span className='ticket w-fit bg-marigold px-3 py-0.5 text-xs font-medium text-stage'>Invite-only beta</span>
            <h1 className='display mt-6 text-[clamp(5rem,22vw,18rem)] text-tomato'>LU Chat</h1>
            <p className='mt-6 max-w-xl text-pretty text-xl sm:text-2xl'>Your little corner of the internet, for two</p>
            <ul className='mt-10 flex flex-wrap gap-3'>
                <li>
                    <Link href='/lu-chat/privacy' className='ticket block bg-bone px-5 py-2 font-medium text-stage hover:underline'>
                        Privacy
                    </Link>
                </li>
                <li>
                    <Link href='/lu-chat/support' className='ticket block bg-lilac px-5 py-2 font-medium text-stage hover:underline'>
                        Support
                    </Link>
                </li>
            </ul>
        </main>
    );
}
