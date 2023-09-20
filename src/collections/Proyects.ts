import { CollectionConfig } from 'payload/types';

const Proyects: CollectionConfig = {
    slug: 'proyects',
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
            name: 'imgUrl',
            type: 'relationship',
            relationTo: 'media',
        },

    ],
    timestamps: false,
}

export default Proyects;