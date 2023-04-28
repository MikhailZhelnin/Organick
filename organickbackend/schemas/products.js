export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'additionalInfo',
            title: 'Additional info',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
        },
    ],
};