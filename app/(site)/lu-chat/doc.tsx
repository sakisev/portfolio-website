import Link from 'next/link';

// Shared shell for LU Chat's public pages (store listings link here). Static, no tracking, no gating.
export default function LuChatDoc({ children }: { children: React.ReactNode }) {
    return (
        <main className='px-4 pb-24 pt-24 sm:px-8'>
            <Link href='/lu-chat' className='text-sm text-ash underline decoration-rule underline-offset-4 hover:text-bone'>
                LU Chat
            </Link>
            <article
                className={[
                    'mx-auto mt-8 max-w-[720px] text-pretty text-base leading-relaxed',
                    '[&_h1]:font-display [&_h1]:font-extrabold [&_h1]:uppercase [&_h1]:leading-[0.85] [&_h1]:mb-2 [&_h1]:text-balance [&_h1]:text-[clamp(2.75rem,9vw,5rem)]',
                    '[&_h2]:mb-2 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-marigold',
                    '[&_p]:my-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5',
                    '[&_a]:underline [&_a]:decoration-marigold [&_a]:underline-offset-4 [&_a:hover]:text-marigold',
                    '[&_table]:my-3 [&_table]:w-full [&_table]:border-collapse [&_table]:text-[15px]',
                    '[&_th]:border-b [&_th]:border-dashed [&_th]:border-rule [&_th]:py-2 [&_th]:pr-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-ash',
                    '[&_td]:border-b [&_td]:border-dashed [&_td]:border-rule [&_td]:py-2 [&_td]:pr-3 [&_td]:align-top',
                ].join(' ')}
            >
                {children}
            </article>
        </main>
    );
}
