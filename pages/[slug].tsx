import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getPagePage, getPageSlugs } from '@/sanity/lib/client';
import { TPagePage } from '@/types';
import PagePage from '@/components/pages/page/page.page';

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PagePage page={data.page} site={data.site} />;
}

export const getStaticProps: GetStaticProps<{ data: TPagePage }> = async (
  ctx
) => {
  const { params = {} } = ctx;

  const data = await getPagePage({ slug: params.slug as string });

  if (!data.page) return { notFound: true };

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getPageSlugs();
  return {
    paths: paths.map((slug) => `/${slug}`),
    fallback: false,
  };
};
