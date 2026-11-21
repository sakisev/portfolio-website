import { Project } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const CARD_BG = ['bg-tomato', 'bg-marigold', 'bg-lilac'];
const STATUS_BG = { Ongoing: 'bg-marigold', Paused: 'bg-lilac', Live: 'bg-tomato' } as const;

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <section id='projects' aria-labelledby='projects-title' className='px-4 py-20 sm:px-8 lg:py-28'>
            <h2 id='projects-title' className='display mb-12 text-[clamp(3.5rem,12vw,11rem)]'>
                Projects
            </h2>
            <div className='grid gap-6 xl:grid-cols-2'>
                {projects.map((p, i) => {
                    const { image } = p;
                    const page = p.href ?? (p.slug ? `/project/${p.slug}` : undefined);
                    return (
                        <article
                            key={p._id}
                            className='grid gap-4 rounded-[1.75rem] border border-dashed border-rule p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]'
                        >
                            <div className={`film-frame grid aspect-[4/3] place-items-center sm:aspect-auto sm:min-h-72 ${image ? '' : CARD_BG[i % CARD_BG.length]}`}>
                                {image ? (
                                    <Image src={image} alt='' fill sizes='(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw' className='object-cover' />
                                ) : (
                                    // Title card when there's no still.
                                    <span aria-hidden className='display p-6 text-center text-[clamp(2.25rem,4vw,3.25rem)] text-balance text-stage'>
                                        {p.name}
                                    </span>
                                )}
                            </div>
                            <div className='flex flex-col gap-4 p-3 sm:py-5'>
                                <span className={`ticket w-fit ${p.status ? STATUS_BG[p.status] : 'hidden'} px-3 py-0.5 text-xs font-medium text-stage`}>
                                    {p.status}
                                </span>
                                <h3 className='display text-balance text-5xl'>{p.name}</h3>
                                <p className='text-pretty text-ash'>{p.short_description}</p>
                                <p className='text-sm'>{p.stack?.join(', ')}</p>
                                {(page || p.url) && (
                                    <div className='mt-auto flex gap-4 text-sm font-medium'>
                                        {page && (
                                            <Link href={page} className='underline decoration-rule underline-offset-4 hover:decoration-bone'>
                                                Read more
                                            </Link>
                                        )}
                                        {p.url && (
                                            <a href={p.url} target='_blank' rel='noopener noreferrer' className='underline decoration-rule underline-offset-4 hover:decoration-bone'>
                                                View source
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
