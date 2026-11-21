const workExperienceSchema = {
    name: 'work_experience',
    title: 'Work Experience',
    type: 'document',
    orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
    fields: [
        { name: 'company', title: 'Company', type: 'string', validation: (r: { required: () => unknown }) => r.required() },
        { name: 'years', title: 'Years', type: 'string', description: 'Shown in the career list, e.g. 2023–2024 or 2025–now' },
        { name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first' },
        {
            name: 'roles',
            title: 'Roles',
            type: 'array',
            description: 'Most recent first',
            of: [
                {
                    type: 'object',
                    name: 'role',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'period', title: 'Period', type: 'string' },
                    ],
                },
            ],
        },
        { name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'string' }] },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Leave empty if this role has no detail page',
            options: { source: 'company' },
        },
        {
            name: 'company_position',
            title: 'Company and position',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
};

export default workExperienceSchema;
