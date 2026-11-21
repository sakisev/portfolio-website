import DetailPage from '@/components/detail-page';
import { getProject } from '@/sanity/sanity-utils';
import { redirect } from 'next/navigation';

export default async function ProjectItemPage({ params }: { params: Promise<{ slug: string }> }) {
    const project = await getProject((await params).slug);
    if (!project) redirect('/');

    return (
        <DetailPage
            title={project.name}
            summary={project.short_description}
            image={project.image}
            content={project.content}
            url={project.url ?? undefined}
            backHref='/#projects'
            backLabel='projects'
        />
    );
}
