import { getQuoteById } from '../service'

interface SingleQuotePageProps {
  params?: {
    id?: string
  }
}

export default async function SingleQuotePage({
  params,
}: SingleQuotePageProps) {
  if (!params?.id) return <div>Missing Id field</div>

  try {
    const quote = await getQuoteById(params.id, { next: { revalidate: 60 } })

    return (
      <div>
        <b>{quote.author}</b>
        <blockquote>{quote.content}</blockquote>
      </div>
    )
  } catch {
    return <h1>Cannot find quote with id {params.id}</h1>
  }
}
