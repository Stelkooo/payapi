import Layout from '@/components/global/layout.component';
import ModuleBuilder from '@/components/modules/module-builder.component';
import { TPage, TSite } from '@/types';

type Props = {
  page?: TPage;
  site?: TSite;
};

export default function PagePage({ page = {}, site = {} }: Props) {
  console.log(page.modules);

  return (
    <Layout site={site}>
      <div className="mb-10 px-6 md:mx-auto md:mb-14 md:max-w-xl md:px-0 xl:max-w-screen-xl">
        <h1 className="h1--small text-center xl:max-w-[730px] xl:text-left">
          {page.title}
        </h1>
      </div>
      {page.modules &&
        page.modules.map((module) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <ModuleBuilder key={module._key} {...module} />;
        })}
    </Layout>
  );
}
