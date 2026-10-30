import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { Seo } from '@/components/Seo'
import { site, experience, communityRoles } from '@/content/site'
export default function Home() {
  return (
    <>
      <Seo />
      <div className="wrap">
        <section className="home-hero">
          <div className="eyebrow hero-eyebrow">
            <span className="accent-dot" /> John Weland / Minnesota
          </div>
          <h1>
            Build useful things.
            <br />
            <span>Be useful to people.</span>
          </h1>
          <div className="hero-bottom">
            <p>{site.intro}</p>
            <div className="hero-actions">
              <Button asChild>
                <a href="#work">Explore my work</a>
              </Button>
              <a href="#about" className="text-link">
                About me
              </a>
            </div>
          </div>
          <nav className="home-social-links" aria-label="Social profiles">
            <Button asChild variant="ghost" size="icon">
              <a
                href={site.links.linkedin}
                aria-label="John Weland on LinkedIn"
              >
                <LinkedInIcon
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={site.links.github} aria-label="John Weland on GitHub">
                <GitHubIcon
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              </a>
            </Button>
          </nav>
          <div className="hero-foot">
            <span className="eyebrow">Cloud architecture. Local service.</span>
            <a href="#about" aria-label="Scroll to about John">
              <ArrowDown size={19} />
            </a>
          </div>
        </section>
        <section
          id="about"
          className="home-about section-block"
          aria-labelledby="about-heading"
        >
          <div className="about-grid">
            <div className="portrait">
              <Image
                src="/images/john-weland.webp"
                alt="John Weland"
                width={900}
                height={1200}
                sizes="(max-width: 720px) calc(100vw - 40px), 380px"
              />
            </div>
            <div className="body-copy">
              <p className="eyebrow">About</p>
              <h2 id="about-heading">Hi, I’m John.</h2>
              <p>
                I’m originally from Texas and now live in rural Minnesota with
                my family. I’m a husband and a father. At home, conversations
                about programming practices, new technology, or games sometimes
                earn a patient smile and nod.
              </p>
              <p>
                I’m a co-founder of Damned Cat Studio, bringing a software
                engineer’s perspective to independent game development.
              </p>
              <p>
                I enjoy making complex things understandable, finding
                opportunities to automate, and helping teams grow. Meeting a
                client’s needs and making room for a healthy life both matter to
                me.
              </p>
              <a href="#community" className="text-link">
                My community involvement
              </a>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="section-block"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Professional work</p>
              <h2 id="work-heading">Cloud architecture & engineering.</h2>
            </div>
          </div>
          <p className="work-summary">
            I work with AWS architecture, cloud migrations, infrastructure as
            code, and software engineering. My focus is on systems that teams
            can understand, operate, and maintain.
          </p>
          <div className="home-work-details">
            <div className="body-copy">
              <h3>How I approach the work</h3>
              <p>
                Security, compliance, cost, and operational needs are part of
                the architecture from the start. I aim to leave teams with
                systems they can own and maintain.
              </p>
              <p>
                I’ve worked with organizations ranging from defense contractors
                to startups. Listening to the team and understanding the problem
                come first.
              </p>
            </div>
            <div>
              <h3>Experience</h3>
              <ol
                className="home-experience"
                aria-label="Professional experience"
              >
                {experience.map((job) => (
                  <li className="home-experience-row" key={job.company}>
                    <div>
                      <h4>{job.company}</h4>
                      <p>{job.role}</p>
                    </div>
                    <span>{job.period}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section
          id="community"
          className="home-community section-block"
          aria-labelledby="community-heading"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">Community</p>
              <h2 id="community-heading">Serving the place I call home.</h2>
            </div>
          </div>
          <p className="work-summary">
            My work in Jackson includes elected service, public infrastructure,
            and animal welfare. My background in emergency preparedness began in
            Texas.
          </p>
          <div className="home-community-grid">
            {communityRoles.map((item) => (
              <article className="community-entry" key={item.organization}>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.organization}</h3>
                <p className="role-title">{item.role}</p>
                <p className="role-status">{item.status}</p>
                <div className="community-entry-copy">
                  {item.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                {item.href && (
                  <a className="text-link" href={item.href}>
                    {item.linkLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: site.name,
            url: site.url,
            sameAs: [site.links.github, site.links.linkedin],
          }),
        }}
      />
    </>
  )
}
