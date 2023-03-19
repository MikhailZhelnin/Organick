export default {
    name: 'experts',
    title: 'Experts',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
        },
        {
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'item',
                    fields: [
                        {type: 'string', name: 'name'},
                        {type: 'string', name: 'link'},
                    ]
                }
            ]
        },
    ],
};