const skillGroupSchema = {
    name: 'skill_group',
    title: 'Skill Groups',
    type: 'document',
    orderings: [{ title: 'Display order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'items', title: 'Skills', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
        { name: 'order', title: 'Display order', type: 'number', description: 'Lower numbers appear first' },
    ],
};

export default skillGroupSchema;
