import { WorkExperience } from '@/lib/types';
import Link from 'next/link';

const ACCENTS = ['text-marigold', 'text-tomato', 'text-lilac'];

export default function Career({ items }: { items: WorkExperience[] }) {
    return (
        <section id='career' aria-labelledby='career-title' className='px-4 py-20 sm:px-8 lg:py-28'>
            <h2 id='career-title' className='display mb-12 text-[clamp(3.5rem,12vw,11rem)]'>
                Career
            </h2>
            <ol>
                {items.map((e, i) => (
                    <li
                        key={e._id}
                        className='grid gap-x-8 gap-y-4 border-t border-dashed border-rule py-8 md:grid-cols-[8rem_1fr] lg:grid-cols-[10rem_1.1fr_1fr]'
                    >
                        <p className='text-sm tabular-nums text-ash'>{e.years}</p>
                        <div>
                            <h3 className={`display text-balance text-5xl sm:text-6xl ${ACCENTS[i % ACCENTS.length]}`}>{e.company}</h3>
                            <ul className='mt-4 space-y-1'>
                                {e.roles?.map((r) => (
                                    <li key={r.title} className='flex flex-wrap gap-x-3'>
                                        <span>{r.title}</span>
                                        <span className='tabular-nums text-ash'>{r.period}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='md:col-start-2 lg:col-start-3'>
                            <ul className='space-y-2 text-pretty text-ash'>
                                {e.highlights?.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                            {e.slug && (
                                <Link href={`/work/${e.slug}`} className='mt-4 inline-block text-sm font-medium underline decoration-rule underline-offset-4 hover:decoration-bone'>
                                    More about {e.company}
                                </Link>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
