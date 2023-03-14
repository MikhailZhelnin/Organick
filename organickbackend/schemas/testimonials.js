export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'info',
            title: 'Info',
            type: 'string',
        },
    ],
};