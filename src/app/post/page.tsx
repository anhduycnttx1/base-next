import ContainerUI from '@/ui/container';
import { getHello } from '../api/hello/route';

export default async function PostPage() {
  const { data, errors } = await getHello();
  if (!errors) alert(errors);
  return (
    <main>
      <ContainerUI>{data.site_name}</ContainerUI>
    </main>
  );
}
