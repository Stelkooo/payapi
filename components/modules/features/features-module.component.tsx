import { IFeaturesModule } from '@/types';
import Feature from './feature.component';

export default function FeaturesModule({ features }: IFeaturesModule) {
  return (
    <section className="my-20 md:py-[100px]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-6 md:flex-row md:gap-[10px] md:px-10 xl:gap-[30px] xl:px-0">
        {features?.map(({ _key, desc, icon, title }) => (
          <Feature key={_key} desc={desc} icon={icon} title={title} />
        ))}
      </div>
    </section>
  );
}
