import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Media from './collections/Media';
import Proyects from './collections/Proyects';
import ProyectPage from './config/ProyectPage';
import Skill from './collections/Skill';
import Skills from './config/Skills';
import { config } from 'dotenv';
import Config from './config/Config';
import Personal from './collections/Personal';

export default buildConfig({
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users.slug,
    },
    collections: [
        Personal,
        Categories,
        Posts,
        Tags,
        Users,
        Media,
        Proyects,
        ProyectPage,
        Skill,
        Skills,
        Config,

    ],

    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
});
