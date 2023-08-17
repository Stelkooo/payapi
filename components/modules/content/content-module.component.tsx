import { IContentModule } from '@/types';
import CodeContentModule from './code-content-module.component';
import ContentMockupModule from './content-mockup-module.component';

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
    default:
      return null;
  }
}
