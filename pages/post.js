import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the post page.</p>
    </Layout>
  );
};

export default Page;