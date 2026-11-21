import DetailPage from '@/components/detail-page';
import { getWorkExperienceItem } from '@/sanity/sanity-utils';
import { redirect } from 'next/navigation';

export default async function WorkItemPage({ params }: { params: Promise<{ slug: string }> }) {
    const item = await getWorkExperienceItem((await params).slug);
    if (!item) redirect('/');

    return (
        <DetailPage
            title={item.company ?? item.company_position.split(/\s+[-–]\s+/)[0].replace(/\.$/, '')}
            subtitle={item.name}
            summary={item.short_description}
            image={item.image}
            content={item.content}
            url={item.url}
            backHref='/#career'
            backLabel='career'
        />
    );
}
