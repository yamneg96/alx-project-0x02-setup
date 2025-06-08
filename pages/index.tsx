import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to ALX Project</h1>
          <p className="text-xl text-gray-600 mb-8">
            A Next.js project demonstrating various components and features
          </p>
          <div className="space-x-4">
            <Button
              size="large"
              shape="rounded-md"
              onClick={() => router.push('/home')}
            >
              Get Started
            </Button>
            <Button
              size="large"
              shape="rounded-md"
              onClick={() => router.push('/about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 