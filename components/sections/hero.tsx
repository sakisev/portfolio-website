import { HomepageHeader, WorkExperience } from '@/lib/types';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

// One orchestrated load: each display line rises out of its own mask, staggered.
function Rise({ children, delay, className = '' }: { children: string; delay: number; className?: string }) {
    return (
        <span className={`block overflow-hidden ${className}`}>
            <span className='block animate-rise' style={{ animationDelay: `${delay}ms` }}>
                {children}
            </span>
        </span>
    );
}

export default function Hero({
    image,
    gitHubUrl,
    linkedInUrl,
    content,
    career,
}: Partial<HomepageHeader> & { career: WorkExperience[] }) {
    const current = career[0];
    return (
        <section
            aria-labelledby='hero-name'
            className='relative grid min-h-dvh grid-cols-12 content-end gap-x-4 gap-y-8 overflow-hidden px-4 pb-6 pt-24 sm:px-8 lg:content-between'
        >
            {/* Credits list: where I've worked, staggered like a film slate. */}
            <ul className='col-span-6 text-sm font-medium uppercase leading-tight sm:col-span-3 lg:col-span-2'>
                {career.map((e, i) => (
                    <li key={e._id} style={{ paddingLeft: `${i * 0.75}rem` }}>
                        {e.company}
                    </li>
                ))}
            </ul>

            <div className='col-span-12 max-w-prose text-pretty text-base text-ash sm:col-span-9 lg:col-span-7 lg:col-start-4 lg:max-w-none lg:columns-3 lg:gap-12'>
                {content && <PortableText value={content} />}
            </div>

            <div className='display col-span-12 flex items-center justify-between gap-x-4 text-[clamp(1.75rem,8vw,6.5rem)] lg:grid lg:grid-cols-12 lg:text-[6vw]'>
                <Rise delay={200} className='text-marigold lg:col-span-4'>
                    Web
                </Rise>
                <span aria-hidden className='hidden h-0.5 bg-marigold lg:col-span-2 lg:block' />
                <Rise delay={300} className='text-tomato lg:col-span-3 lg:text-center'>
                    Mobile
                </Rise>
                <Rise delay={400} className='text-lilac lg:col-span-3 lg:text-right'>
                    Desktop
                </Rise>
            </div>

            <h1
                id='hero-name'
                className='display col-span-12 text-[clamp(4rem,14vw,17rem)] lg:col-span-9'
            >
                <Rise delay={500} className='text-[0.42em]'>
                    Sakis
                </Rise>
                <Rise delay={600} className='-ml-[0.04em]'>
                    Evangelou
                </Rise>
            </h1>

            <div className='col-span-12 flex flex-col gap-4 sm:col-span-6 lg:col-span-3 lg:self-end'>
                {image && (
                    <div className='film-frame aspect-[4/5] w-full max-w-xs'>
                        <Image
                            src={image}
                            alt='Portrait of Sakis Evangelou'
                            fill
                            priority
                            sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                            className='object-cover'
                        />
                    </div>
                )}
                <p className='text-xs leading-snug text-ash'>
                    {current?.roles?.[0] && (
                        <>
                            {current.roles[0].title} at {current.company}
                            <br />
                        </>
                    )}
                    Based in Nicosia, Cyprus
                </p>
                <div className='flex flex-wrap gap-2'>
                    {gitHubUrl && (
                        <a href={gitHubUrl} target='_blank' rel='noopener noreferrer' className='ticket bg-marigold px-4 py-1.5 text-sm font-medium text-stage hover:underline'>
                            GitHub
                        </a>
                    )}
                    {linkedInUrl && (
                        <a href={linkedInUrl} target='_blank' rel='noopener noreferrer' className='ticket bg-lilac px-4 py-1.5 text-sm font-medium text-stage hover:underline'>
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
