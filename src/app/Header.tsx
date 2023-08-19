import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 bg-base-100 grayscale filter">
      <nav className="navbar mx-auto w-full max-w-screen-lg">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            Logo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-4 p-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/quote">Quote</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
