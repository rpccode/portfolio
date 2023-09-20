import { CollectionConfig } from 'payload/types';

const Skill: CollectionConfig = {
    slug: 'skill',
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
            name: 'img',
            type: 'relationship',
            relationTo: 'media'
        },



    ],
    timestamps: false,
}

export default Skill;