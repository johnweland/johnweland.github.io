import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet'
import { navigation } from '@/content/site'

export function Header() {
  const { pathname } = useRouter()
  const [dark, setDark] = useState<boolean | null>(null)
  function toggleTheme() {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('isDarkMode', String(next))
    setDark(next)
  }
  return (
    <header className="site-header wrap">
      <Link href="/" className="wordmark" aria-label="John Weland home">
        JOHN WELAND
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={
            dark === null
              ? 'Toggle color theme'
              : dark
              ? 'Switch to light theme'
              : 'Switch to dark theme'
          }
        >
          <Sun className="hidden dark:block" />
          <Moon className="dark:hidden" />
        </Button>
        <div className="mobile-menu">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="mt-12 text-2xl font-semibold">
                John Weland
              </SheetTitle>
              <SheetDescription className="mt-2 text-sm text-muted-foreground">
                About, professional work, and community.
              </SheetDescription>
              <nav
                aria-label="Mobile navigation"
                className="mt-10 flex flex-col gap-2"
              >
                {navigation.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className="border-b py-4 text-xl"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
