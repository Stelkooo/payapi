import { createClient } from 'next-sanity';

import { THomePage, TPagePage } from '@/types';

import { apiVersion, dataset, projectId, useCdn } from '../env';
import { homePageQuery, pagePageQuery, pageSlugs } from './queries';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getHomePage(): Promise<THomePage> {
  return (await client.fetch(homePageQuery)) || ({} as THomePage);
}

export async function getPagePage({
  slug,
}: {
  slug: string;
}): Promise<TPagePage> {
  return (await client.fetch(pagePageQuery, { slug })) || ({} as TPagePage);
}

export async function getPageSlugs(): Promise<string[]> {
  return (await client.fetch(pageSlugs)) || [];
}
