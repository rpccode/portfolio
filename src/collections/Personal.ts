import { CollectionConfig } from 'payload/types';

const Personal: CollectionConfig = {
    slug: 'personal',
    admin: {
        useAsTitle: 'nombre',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'nombre',
            type: 'text',
        },
        {
            name: 'Precentacion',
            type: 'textarea',

        },
        {
            name: 'bienvenida',
            type: 'text',
        },
        {
            name: 'Especializacion', // required
            type: 'array', // required
            label: 'Especializaciones',
            minRows: 2,
            maxRows: 10,
            labels: {
                singular: 'Especializacion',
                plural: 'Especializaciones',
            },
            fields: [ // required
                {
                    name: 'name',
                    type: 'text',

                },
            ],

        },
        {
            name: 'CV',
            type: 'upload',
            relationTo: 'media'
        },




    ],
    timestamps: false,
}

export default Personal;