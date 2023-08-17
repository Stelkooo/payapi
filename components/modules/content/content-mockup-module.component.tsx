import Photo from '@/components/shared/photo.component';
import { IContentModule } from '@/types';

export default function ContentMockupModule({
  desc,
  image,
  title,
}: IContentModule) {
  return (
    <section className="my-20 md:my-[100px] xl:my-[150px]">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center gap-12 px-6 xl:flex-row-reverse xl:gap-0 xl:px-0">
        <div>
          {image && (
            <Photo
              image={image}
              className="md:max-w-[363px] xl:max-w-[571px]"
            />
          )}
        </div>
        <div className="space-y-6 text-center md:mx-auto md:max-w-xl xl:ml-0 xl:max-w-md xl:text-left">
          <h2 className="h2">{title}</h2>
          <p className="text-light-san-juan-blue">{desc}</p>
        </div>
      </div>
    </section>
  );
}
