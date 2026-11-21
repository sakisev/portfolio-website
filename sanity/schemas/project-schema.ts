const projectSchema = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
    fields: [
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: { list: ['Ongoing', 'Paused', 'Live'], layout: 'radio' },
        },
        { name: 'stack', title: 'Stack', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
        {
            name: 'href',
            title: 'Page path',
            type: 'string',
            description: 'Optional site path for projects with their own page, e.g. /lu-chat. Overrides the default /project/<slug> link.',
        },
        { name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first' },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
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
            name: 'gallery',
            title: 'Screenshots',
            type: 'array',
            of: [{ type: 'image', fields: [{ name: 'alt', title: 'Alt', type: 'string' }] }],
        },
        { name: 'video', title: 'Demo video', type: 'file', options: { accept: 'video/mp4' } },
        { name: 'videoPoster', title: 'Demo video poster', type: 'image' },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
};

export default projectSchema;
