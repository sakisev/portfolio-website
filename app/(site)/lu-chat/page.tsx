import { getProjectById } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'LU Chat',
    description: 'Your little corner of the internet, for two',
};

// Copy and media come from the "LU Chat" project in Sanity; the legal pages stay static.
export const revalidate = 60;

const links = (
    <ul className='flex flex-wrap gap-3'>
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
);

export default async function LuChatPage() {
    const project = await getProjectById('project-lu-chat');

    return (
        <main>
            <section className='grid min-h-[85dvh] content-end px-4 pb-16 pt-28 sm:px-8'>
                <span className='ticket w-fit bg-marigold px-3 py-0.5 text-xs font-medium text-stage'>Invite-only beta</span>
                <h1 className='display mt-6 text-[clamp(5rem,22vw,18rem)] text-tomato'>LU Chat</h1>
                <p className='mt-6 max-w-xl text-pretty text-xl sm:text-2xl'>Your little corner of the internet, for two</p>
                <div className='mt-10'>{links}</div>
            </section>

            {project?.video && (
                <section aria-label='Demo video' className='px-4 sm:px-8'>
                    <div className='film-frame aspect-video'>
                        <video
                            src={project.video}
                            poster={project.videoPoster}
                            controls
                            muted
                            playsInline
                            preload='none'
                            className='absolute inset-0 size-full object-cover'
                        >
                            A short demo of LU Chat&apos;s chat, games and LU wallet.
                        </video>
                    </div>
                </section>
            )}

            {project?.content && (
                <section aria-labelledby='about-title' className='grid gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 lg:py-28'>
                    <div>
                        <h2 id='about-title' className='display text-[clamp(3.5rem,9vw,8rem)]'>
                            About
                        </h2>
                        <dl className='mt-8 space-y-4 border-t border-dashed border-rule pt-6 text-sm'>
                            <div>
                                <dt className='text-ash'>Status</dt>
                                <dd>Invite-only beta, coming to TestFlight and Google Play</dd>
                            </div>
                            <div>
                                <dt className='text-ash'>Platforms</dt>
                                <dd>iOS and Android</dd>
                            </div>
                            {project.stack && (
                                <div>
                                    <dt className='text-ash'>Built with</dt>
                                    <dd>{project.stack.join(', ')}</dd>
                                </div>
                            )}
                        </dl>
                    </div>
                    <div className='max-w-prose space-y-5 text-pretty text-lg leading-relaxed text-ash [&_p:first-child]:text-xl [&_p:first-child]:text-bone'>
                        <PortableText value={project.content} />
                    </div>
                </section>
            )}

            {project?.gallery?.length ? (
                <section aria-labelledby='screens-title' className='bg-petrol py-20 lg:py-28'>
                    <h2 id='screens-title' className='display px-4 text-[clamp(3.5rem,9vw,8rem)] sm:px-8'>
                        Screens
                    </h2>
                    <ul className='mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-8 lg:grid lg:grid-cols-4 lg:overflow-visible'>
                        {project.gallery.map((shot) => (
                            <li key={shot.url} className='w-[70vw] max-w-72 shrink-0 snap-start lg:w-auto lg:max-w-none'>
                                <Image
                                    src={shot.url}
                                    alt={shot.alt ?? ''}
                                    width={shot.width}
                                    height={shot.height}
                                    sizes='(min-width: 1024px) 22vw, 70vw'
                                    className='w-full rounded-[2rem] border-[6px] border-stage shadow-xl'
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            ) : null}

            <section className='flex flex-col items-start gap-6 px-4 py-20 sm:px-8'>
                <p className='text-lg text-ash'>Questions about the beta or your data?</p>
                {links}
            </section>
        </main>
    );
}
