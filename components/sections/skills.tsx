import { SkillGroup } from '@/lib/types';

export default function Skills({ groups }: { groups: SkillGroup[] }) {
    return (
        <section id='skills' aria-labelledby='skills-title' className='bg-petrol px-4 py-20 sm:px-8 lg:py-28'>
            <h2 id='skills-title' className='display mb-12 text-[clamp(3.5rem,12vw,11rem)]'>
                Skills
            </h2>
            <dl className='grid border-l border-t border-dashed border-bone/30 sm:grid-cols-2 lg:grid-cols-3'>
                {groups.map(({ _id, title, items }) => (
                    <div key={_id} className='border-b border-r border-dashed border-bone/30 p-6'>
                        <dt className='mb-4 text-sm text-bone/80'>{title}</dt>
                        {items?.map((s) => (
                            <dd key={s} className='display text-4xl leading-[0.95]'>
                                {s}
                            </dd>
                        ))}
                    </div>
                ))}
            </dl>
        </section>
    );
}
