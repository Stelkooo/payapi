import { THome, TSite } from '@/types';
import Header from './header/header.component';

type Props = {
  children: React.ReactNode;
  site?: TSite;
  page?: THome;
};

export default function Layout({ children, page, site }: Props) {
  return (
    <div>
      <Header header={site?.header} />
      <main>{children}</main>
    </div>
  );
}
