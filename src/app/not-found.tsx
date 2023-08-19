import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-center py-2 text-center">
      <h2 className="font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn btn-link" href="/">
        Return Home
      </Link>
    </div>
  )
}
