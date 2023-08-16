import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import PayAPILogo from '@/public/assets/logo.svg';

export default function Logo() {
  const router = useRouter();

  const content = <Image src={PayAPILogo} alt="PayAPI Logo" />;

  if (router.pathname === '/') return content;

  return <Link href="/">{content}</Link>;
}
