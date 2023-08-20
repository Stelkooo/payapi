import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

import { TImage } from '@/types';
import { client } from '@/sanity/lib/client';

type Props = {
  image: TImage;
  className?: string;
  alt?: string;
  sizes?: string;
};

export default function Photo({
  image,
  className = '',
  alt = '',
  sizes = '(max-width: 800px) 100vw, 800px',
}: Props) {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...imageProps}
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      className={className}
      sizes={sizes}
      alt={alt}
    />
  );
}
