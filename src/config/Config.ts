import { CollectionConfig } from 'payload/types';

const Config: CollectionConfig = {
    slug: 'config',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'logo',
            type: 'relationship',
            relationTo: 'media'
        },
        {
            name: 'headerImg',

            type: 'relationship',
            relationTo: 'media'
        },

        {
            name: 'social', // required
            type: 'array', // required
            label: 'Social Media',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'social',
                plural: 'socials',
            },
            fields: [ // required
                {
                    name: 'name',
                    type: 'text',

                },
                {
                    name: 'url',
                    type: 'text'

                },
                {
                    name: 'img',
                    type: 'relationship',
                    relationTo: 'media'

                },
            ],

        },
        {
            name: 'state',
            type: 'checkbox',
            defaultValue: false
        }

    ],

    timestamps: false,
}

export default Config;