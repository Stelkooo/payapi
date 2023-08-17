import { TCompany } from '@/types';
import Photo from '../../shared/photo.component';

type Props = {
  companies?: TCompany[];
};

export default function CompanyLogos({ companies }: Props) {
  if (companies)
    return (
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center gap-y-10 md:m-auto md:max-h-[103px] md:w-full md:max-w-[536px] md:grid-cols-3">
        {companies?.map(({ _id, logo, name }) => {
          if (logo) {
            return <Photo image={logo} key={_id} alt={name} />;
          }
          return false;
        })}
      </div>
    );

  return null;
}
