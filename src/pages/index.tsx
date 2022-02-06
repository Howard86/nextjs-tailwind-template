import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import vercelLogo from '@/public/vercel.svg';
import { useGetNameQuery } from '@/services/local';

const Home = () => {
  const { data, fulfilledTimeStamp } = useGetNameQuery();

  return (
    <div className="container-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose-net prose flex max-w-none flex-1 flex-col items-center justify-center px-20 text-center lg:prose-lg ">
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <p>
          Go to{' '}
          <Link href="/new-page">
            <a>New Page</a>
          </Link>
        </p>

        {data && fulfilledTimeStamp && (
          <p>
            Local API /hello responds {data.name} called{' '}
            {fulfilledTimeStamp - data.timestamp}ms ago
          </p>
        )}

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border px-6 pb-3 text-left no-underline hover:border-current"
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border px-6 pb-3 text-left no-underline hover:border-current"
          >
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border px-6 pb-3 text-left no-underline hover:border-current"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border px-6 pb-3 text-left no-underline hover:border-current"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="mt-6 flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            src={vercelLogo}
            alt="Vercel Logo"
            className="text-c ml-2 h-4"
            height={16}
            width={64}
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
