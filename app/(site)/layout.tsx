import type { Metadata } from 'next';
import { Big_Shoulders, Instrument_Sans } from 'next/font/google';
import Link from 'next/link';
import '../globals.css';

const display = Big_Shoulders({
    subsets: ['latin'],
    weight: ['800'],
    variable: '--font-big-shoulders',
});
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument' });

export const metadata: Metadata = {
    title: 'Sakis Evangelou',
    description:
        'Software engineer and team lead building web and mobile products with React, TypeScript and Next.js.',
};

const nav = [
    { href: '/#career', label: 'Career' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#contact', label: 'Contact' },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en' className={`${display.variable} ${sans.variable}`}>
            <body className='grain min-h-dvh'>
                <header className='fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 bg-stage/90 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8'>
                    <Link href='/' className='display text-2xl leading-none'>
                        Sakis Evangelou
                    </Link>
                    <nav aria-label='Main' className='ticket bg-bone text-stage'>
                        <ul className='flex text-sm font-medium'>
                            {nav.map(({ href, label }, i) => (
                                <li key={href} className={i === 0 ? 'hidden sm:block' : ''}>
                                    <Link
                                        href={href}
                                        className='block px-3 py-1.5 hover:underline sm:px-4'
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
