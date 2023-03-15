export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'number',
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
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'posted',
            title: 'Posted',
            type: 'date',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H3', value: 'h3'}
                    ],
                }
            ]
        }
    ],
};