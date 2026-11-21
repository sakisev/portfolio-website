import { PortableText, PortableTextBlock } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    title: string;
    subtitle?: string;
    summary?: string;
    image?: string;
    content?: PortableTextBlock[];
    url?: string;
    backHref: string;
    backLabel: string;
}

export default function DetailPage({ title, subtitle, summary, image, content, url, backHref, backLabel }: IProps) {
    return (
        <main className='px-4 pb-24 pt-24 sm:px-8'>
            <Link href={backHref} className='text-sm text-ash underline decoration-rule underline-offset-4 hover:text-bone'>
                Back to {backLabel}
            </Link>
            <h1 className='display mt-8 text-balance text-[clamp(3.5rem,11vw,10rem)]'>{title}</h1>
            {subtitle && <p className='mt-4 text-lg text-ash'>{subtitle}</p>}

            <div className='mt-12 grid gap-10 border-t border-dashed border-rule pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16'>
                <div className='max-w-prose space-y-5 text-pretty text-lg leading-relaxed'>
                    {summary && <p className='text-xl'>{summary}</p>}
                    {content && (
                        <PortableText
                            value={content}
                            components={{
                                block: { normal: ({ children }) => <p className='text-ash'>{children}</p> },
                                list: { bullet: ({ children }) => <ul className='list-disc space-y-2 pl-5 text-ash'>{children}</ul> },
                            }}
                        />
                    )}
                    {url && (
                        <a href={url} target='_blank' rel='noopener noreferrer' className='ticket inline-block bg-bone px-4 py-1.5 text-sm font-medium text-stage hover:underline'>
                            Visit website
                        </a>
                    )}
                </div>
                {image && (
                    <div className='film-frame aspect-video self-start'>
                        <Image src={image} alt='' fill sizes='(min-width: 1024px) 50vw, 100vw' className='object-cover' />
                    </div>
                )}
            </div>
        </main>
    );
}
