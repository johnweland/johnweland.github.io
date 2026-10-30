import Link from 'next/link'
export function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <Link href="/" className="wordmark">
          JOHN WELAND
        </Link>
        <p>
          Build useful things.
          <br />
          Be useful to people.
        </p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} John Weland</span>
        <span>Rural Minnesota. Connected everywhere.</span>
      </div>
    </footer>
  )
}
