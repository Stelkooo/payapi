import Layout from '@/components/global/layout.component';
import ModuleBuilder from '@/components/modules/module-builder.component';
import { THome, TSite } from '@/types';

interface Props {
  home?: THome;
  site?: TSite;
}

export default function HomePage({ home = {}, site = {} }: Props) {
  return (
    <Layout page={home} site={site}>
      {home.modules?.map((module) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <ModuleBuilder key={module._key} {...module} />;
      })}
    </Layout>
  );
}
