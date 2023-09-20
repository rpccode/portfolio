import { CollectionConfig } from 'payload/types';

const ProyectPage: CollectionConfig = {
    slug: 'proyectPage',
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
            name: 'tab', // required
            type: 'array', // required
            label: 'Proyect Tab',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Tab',
                plural: 'Tabs',
            },
            fields: [ // required
                {
                    name: 'name',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'text',
                }
            ]
        }

    ],
    timestamps: false,
}

export default ProyectPage;