import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

import { TImage } from '@/types';
import { client } from '@/sanity/lib/client';

type Props = {
  image: TImage;
  className?: string;
};

export default function Photo({ image, className = '' }: Props) {
  const imageProps = useNextSanityImage(client, image);

  return (
    <Image
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...imageProps}
      placeholder="blur"
      blurDataURL={image.asset.metadata.blurHash}
      className={className}
      sizes="(max-width: 800px) 100vw, 800px"
      alt=""
    />
  );
}
