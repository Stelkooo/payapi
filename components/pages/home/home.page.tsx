import Layout from '@/components/global/layout.component';
import { THome, TSite } from '@/types';

interface Props {
  home?: THome;
  site?: TSite;
}

export default function HomePage({ home = {}, site = {} }: Props) {
  return (
    <Layout page={home} site={site}>
      <h1>Home</h1>
    </Layout>
  );
}
