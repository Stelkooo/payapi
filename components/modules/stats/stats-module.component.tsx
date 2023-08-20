import { IStatsModule } from '@/types';

const getType = (type?: 'Plus' | 'Nothing' | 'Million') => {
  switch (type) {
    case 'Million':
      return 'M+';
    case 'Plus':
      return '+';
    default:
      return '';
  }
};

export default function StatsModule({ stats }: IStatsModule) {
  return (
    <section className="my-12 px-6 md:my-16 md:px-10 xl:my-[4.5rem] xl:px-0">
      <h2 className="sr-only">Stats</h2>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 border-y border-y-mirage-blue border-opacity-25 py-4 md:flex-row md:justify-between md:gap-3 md:border-y-0 md:py-0 xl:gap-8">
        {stats?.map(({ _key, name, number, type }) => (
          <div
            key={_key}
            className="text-center md:w-full md:border-y md:border-y-mirage-blue md:border-opacity-25 md:py-4 md:text-left"
          >
            <h3 className="text-base/7 text-mirage-blue text-opacity-70">
              {name}
            </h3>
            <p className="font-serif text-[56px]/[72px] tracking-[-0.431px] text-dark-pink">
              {number}
              {getType(type)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
