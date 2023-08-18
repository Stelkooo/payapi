import { IContentModule } from '@/types';
import CodeContentModule from './code-content-module.component';
import ContentMockupModule from './content-mockup-module.component';
import TitleContent from './title-content.component';

export default function ContentModule({
  desc,
  image,
  title,
  type,
}: IContentModule) {
  switch (type) {
    case 'CodeContent':
      return <CodeContentModule desc={desc} image={image} title={title} />;
    case 'ContentMockup':
      return <ContentMockupModule desc={desc} image={image} title={title} />;
    case 'TitleContent':
      return <TitleContent desc={desc} title={title} />;
    default:
      return null;
  }
}
