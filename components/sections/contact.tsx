export default function Contact({ gitHubUrl, linkedInUrl }: { gitHubUrl?: string; linkedInUrl?: string }) {
    return (
        <footer id='contact' className='bg-oxblood px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 lg:pt-36'>
            <h2 className='display text-[clamp(3.5rem,15vw,15rem)]'>Get in touch</h2>
            <div className='mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end'>
                <p className='max-w-md text-pretty text-lg'>
                    Happy to talk about frontend architecture, leading teams, or a role you think I&apos;d fit.
                </p>
                <ul className='display flex gap-8 text-4xl sm:text-5xl'>
                    {linkedInUrl && (
                        <li>
                            <a href={linkedInUrl} target='_blank' rel='noopener noreferrer' className='underline decoration-2 underline-offset-8 hover:decoration-transparent'>
                                LinkedIn
                            </a>
                        </li>
                    )}
                    {gitHubUrl && (
                        <li>
                            <a href={gitHubUrl} target='_blank' rel='noopener noreferrer' className='underline decoration-2 underline-offset-8 hover:decoration-transparent'>
                                GitHub
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <p className='mt-24 border-t border-dashed border-bone/40 pt-4 text-xs'>
                &copy; {new Date().getFullYear()} Sakis Evangelou, Nicosia, Cyprus
            </p>
        </footer>
    );
}
