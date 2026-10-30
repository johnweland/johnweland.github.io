import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageIntro } from '@/components/PageIntro'
import { Seo } from '@/components/Seo'
export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <div className="wrap">
        <PageIntro eyebrow="404 / A loose end" title="Nothing here just yet.">
          <p>
            This page may have moved. Let’s get you back to familiar ground.
          </p>
        </PageIntro>
        <Button asChild>
          <Link href="/">
            <ArrowLeft /> Back home
          </Link>
        </Button>
      </div>
    </>
  )
}
