import { defineConfig, isDev } from 'sanity';

import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import schemaTypes from './sanity/schemas';

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'payapi',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [deskTool(), ...(isDev ? devOnlyPlugins : [])],
});
