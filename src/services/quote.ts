const QUOTE_API_ENDPOINT = 'https://api.quotable.io';

interface Quote {
  _id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // The length of quote (number of characters)
  length: number;
  // An array of tag names for this quote
  tags: string[];
}

const customFetch = async <T>(
  path: string,
  option?: RequestInit,
): Promise<T> => {
  const res = await fetch(`${QUOTE_API_ENDPOINT}/${path}`, option);

  if (res.status !== 200) throw new Error(`request failed with ${res.status}`);

  return res.json() as Promise<T>;
};

export const getRandomQuote = async (option?: RequestInit) =>
  customFetch<Quote>('random', option);

export const getQuoteById = async (id: string, option?: RequestInit) =>
  customFetch<Quote>(`quotes/${id}`, option);
