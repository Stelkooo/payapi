import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getHomePage } from '@/sanity/lib/client';
import { THomePage } from '@/types';
import HomePage from '@/components/pages/home/home.page';

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage home={data.home} site={data.site} />;
}

export const getStaticProps: GetStaticProps<{ data: THomePage }> = async () => {
  const data = await getHomePage();

  return {
    props: {
      data,
    },
  };
};
