import Link from 'next/link';

export default function NewPage() {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center bg-base-200 px-4 py-16">
          Hello! This is the about page
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        Back to
        <Link className="btn ml-2" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
