import { createClient } from 'next-sanity';

import { THomePage } from '@/types';

import { apiVersion, dataset, projectId, useCdn } from '../env';
import { homePageQuery } from './queries';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getHomePage(): Promise<THomePage> {
  return (await client.fetch(homePageQuery)) || ({} as THomePage);
}
