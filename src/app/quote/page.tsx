/* eslint-disable no-underscore-dangle */
import Link from 'next/link';

import { getRandomQuote } from '@/services/quote';

export default async function QuotePage() {
  const quote = await getRandomQuote({ next: { revalidate: 60 } });

  return (
    <>
      <b>{quote.author}</b>
      <blockquote>{quote.content}</blockquote>
      <Link className="btn-link btn" href={`/quote/${quote._id}`}>
        Ping it
      </Link>
    </>
  );
}
