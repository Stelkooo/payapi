import Link from 'next/link';
import Image from 'next/image';

import { TSocialLink } from '@/types';

import FacebookSVG from '@/public/assets/facebook.svg';
import TwitterSVG from '@/public/assets/twitter.svg';
import LinkedInSVG from '@/public/assets/linkedin.svg';

type Props = {
  socials?: TSocialLink[];
};

export default function FooterSocials({ socials }: Props) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Facebook':
        return FacebookSVG;
      case 'Twitter':
        return TwitterSVG;
      case 'LinkedIn':
        return LinkedInSVG;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex items-center gap-6 md:ml-auto">
      {socials?.map((social) => {
        if (social.url && social.icon) {
          return (
            <Link href={social.url}>
              <Image
                src={getIcon(social.icon)}
                alt={`Link to our ${social.icon} page`}
              />
            </Link>
          );
        }
        return false;
      })}
    </div>
  );
}
