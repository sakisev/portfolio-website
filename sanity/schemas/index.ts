import headerSchema from '@/sanity/schemas/header-schema';
import pageSchema from '@/sanity/schemas/page-schema';
import projectSchema from './project-schema';
import skillGroupSchema from './skill-group-schema';
import workExperienceSchema from './work-experience-schema';

const schemas = [workExperienceSchema, projectSchema, skillGroupSchema, headerSchema, pageSchema];

export default schemas;
