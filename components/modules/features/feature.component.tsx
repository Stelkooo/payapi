import Photo from '@/components/shared/photo.component';
import { TFeature } from '@/types';

export default function Feature({ desc, icon, title }: TFeature) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {icon && <Photo image={icon} alt={`Icon representing ${title}`} />}
      <div className="space-y-4">
        <h3 className="h3--small">{title}</h3>
        <p className="text-[15px]/[25px] tracking-[-0.115px] text-light-san-juan-blue">
          {desc}
        </p>
      </div>
    </div>
  );
}
