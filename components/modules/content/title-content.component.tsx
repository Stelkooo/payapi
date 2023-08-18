import { IContentModule } from '@/types';

export default function TitleContent({ desc, title }: IContentModule) {
  return (
    <section className="my-12 px-6 md:my-16 md:px-10 xl:my-14 xl:px-0">
      <div className="mx-auto flex max-w-[920px] flex-col gap-4 text-center md:flex-row md:gap-3 md:text-left xl:gap-8">
        <h2 className="text-2xl tracking-[-0.185px] md:min-w-[223px] md:max-w-[223px] md:text-[32px]/[40px] md:tracking-[-0.246px] xl:min-w-[255px] xl:max-w-[255px]">
          {title}
        </h2>
        <p className="text-light-san-juan-blue">{desc}</p>
      </div>
    </section>
  );
}
