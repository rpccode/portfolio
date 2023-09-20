import { CollectionConfig } from 'payload/types';

const Skills: CollectionConfig = {
    slug: 'skillsPage',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'skills', // required
            type: 'array', // required
            label: 'All Skills',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Skill',
                plural: 'Skills',
            },
            fields: [ // required
                {
                    name: 'skill',
                    type: 'relationship',
                    relationTo: 'skill',
                },
            ]
        }

    ],
    timestamps: false,
}

export default Skills;