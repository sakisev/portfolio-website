import Career from '@/components/sections/career';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import { getHomepageHeader, getProjects, getSkillGroups, getWorkExperienceItems } from '@/sanity/sanity-utils';

// Pick up Studio edits without a redeploy.
export const revalidate = 60;

export default async function Home() {
    const [header, career, projects, skills] = await Promise.all([
        getHomepageHeader(),
        getWorkExperienceItems(),
        getProjects(),
        getSkillGroups(),
    ]);

    return (
        <>
            <main>
                <Hero {...header} career={career} />
                <Career items={career} />
                <Projects projects={projects} />
                <Skills groups={skills} />
            </main>
            <Contact gitHubUrl={header?.gitHubUrl} linkedInUrl={header?.linkedInUrl} />
        </>
    );
}
