import Photo from '@/components/shared/photo.component';
import { IContactModule } from '@/types';

export default function FormLogos({ companies, title }: IContactModule) {
  return (
    <div className="space-y-8 md:space-y-10 xl:w-full">
      <h3 className="text-center font-serif text-2xl tracking-[-0.185px] text-mirage-blue text-opacity-75 md:mx-auto md:max-w-md xl:mx-0 xl:text-left">
        {title}
      </h3>
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center gap-y-10 md:m-auto md:max-h-[103px] md:w-full md:max-w-[541px] md:grid-cols-3">
        {companies?.map(({ _id, logo, name }) => {
          if (logo) {
            return <Photo image={logo} key={_id} alt={name} sizes="" />;
          }
          return false;
        })}
      </div>
    </div>
  );
}
