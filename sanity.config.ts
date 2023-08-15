import { defineConfig, isDev } from 'sanity';

import { theme } from 'https://themer.sanity.build/api/hues?default=edf3f8;lightest:fbfcfe;darkest:1b262f&primary=ba4270';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import schema from './sanity/schemas';
import structure from './sanity/desk';

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'payapi',

  projectId,
  dataset,
  theme,

  schema,

  plugins: [deskTool({ structure }), ...(isDev ? devOnlyPlugins : [])],
});
