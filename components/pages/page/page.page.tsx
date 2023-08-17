import Layout from '@/components/global/layout.component';
import ModuleBuilder from '@/components/modules/module-builder.component';
import { TPage, TSite } from '@/types';

type Props = {
  page?: TPage;
  site?: TSite;
};

export default function PagePage({ page = {}, site = {} }: Props) {
  return (
    <Layout page={page} site={site}>
      {page.modules &&
        page.modules.map((module) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <ModuleBuilder key={module._key} {...module} />;
        })}
    </Layout>
  );
}
