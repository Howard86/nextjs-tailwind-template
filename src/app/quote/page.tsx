/* eslint-disable no-underscore-dangle */
import Link from 'next/link'

import { getRandomQuote } from '@/services/quote'

export const revalidate = 60

export default async function QuotePage() {
  const quote = await getRandomQuote({ next: { revalidate: 60 } })

  return (
    <div>
      <b>{quote.author}</b>
      <blockquote>{quote.content}</blockquote>
      <div className="flex items-center justify-end">
        <Link className="btn btn-link" href={`/quote/${quote._id}`}>
          Ping it
        </Link>
      </div>
    </div>
  )
}
