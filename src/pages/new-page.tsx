import Link from 'next/link';

const NewPage = (): JSX.Element => (
  <div>
    Back to{' '}
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default NewPage;
