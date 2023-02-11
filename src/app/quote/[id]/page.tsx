/* eslint-disable no-underscore-dangle */
import { getQuoteById } from '@/services/quote';

interface SingleQuotePageProps {
  params?: {
    id?: string;
  };
}

export default async function SingleQuotePage({
  params,
}: SingleQuotePageProps) {
  if (!params?.id) return <div>Missing Id field</div>;

  try {
    const quote = await getQuoteById(params.id);

    return (
      <>
        <b>{quote.author}</b>
        <blockquote>{quote.content}</blockquote>
      </>
    );
  } catch {
    return <h1>Cannot find quote with id {params.id}</h1>;
  }
}
