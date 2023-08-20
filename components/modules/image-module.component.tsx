import { useMediaQuery } from 'usehooks-ts';
import { useEffect, useState } from 'react';

import { IImageModule } from '@/types';
import Photo from '../shared/photo.component';

export default function ImageModule({
  desktopImage,
  mobileImage,
  tabletImage,
}: IImageModule) {
  const [currentImage, setCurrentImage] = useState(mobileImage);

  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isDesktop) setCurrentImage(desktopImage);

    if (isTablet && !isDesktop) setCurrentImage(tabletImage);

    if (!isTablet && !isDesktop) setCurrentImage(mobileImage);
  }, [isTablet, tabletImage, isDesktop, desktopImage, mobileImage]);

  if (currentImage)
    return (
      <figure>
        <Photo
          image={currentImage}
          className="h-[300px] w-full object-cover md:h-[267px] xl:h-[500px]"
          sizes="100vw"
        />
      </figure>
    );
}
