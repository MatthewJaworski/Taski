import Button from '@/components/Button/Button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';
const Home = async () => {
  const { userId } = await auth();
  const href = userId ? '/home' : '/sign-in';

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-5xl font-bold">Taski</h1>
        <p className="mt-4 text-xl">
          All-in-one task management platform designed to simplify your life and
          boost your productivity
        </p>
        <div className="flex gap-2 justify-center mt-5">
          <Button size="large">
            <Link href={href}>Get started</Link>
          </Button>
          <Button size="large" intent="secondary">
            <Link href="/info">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
