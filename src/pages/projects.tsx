// @ts-nocheck
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'IP Blocking Micro Service',
    description:
      'A cloud centric micro service for checking an IP address against a robust block list.',
    links: [
      {
        href: 'https://github.com/johnweland/ipblock-microservice',
        label: 'github.com',
      },
      {
        href: '/articles/architecture-of-a-microservice',
        label: 'blog post',
      },
    ],
    logo: '/images/logos/ipblocker.webp',
  },
  // {
  //   name: 'WordPress on AWS IaC',
  //   description:
  //     'An Infrastructure as Code (IaC) using AWS CDK to create a highly available WordPress deployment.',
  //   links: [
  //     {
  //       href: 'https://github.com/johnweland/wordpress-on-aws',
  //       label: 'github.com',
  //     },
  //     {
  //       href: '/articles/building-for-high-availability',
  //       label: 'blog post',
  //     },
  //   ],
  //   logo: '/images/logos/awscdk.webp',
  // },
  {
    name: 'URL Shortening Micro Service',
    description:
      'A URL shortener (like Bit.ly) built on nodejs. A future revision will be built on AWS using Lambda.',
    links: [
      {
        href: 'https://github.com/Elevator-Robot/url-shortener',
        label: 'github.com',
      },
    ],
    logo: '/images/logos/shortener.webp',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - John Weland [dot] Me</title>
        <meta
          name="description"
          content="Some things I’ve made as I've found need or interest in them."
        />
      </Head>
      <SimpleLayout
        title="Some things I’ve made as I've found need or interest in them."
        intro="I build things as they pique my interest. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  width={40}
                  height={40}
                  alt=""
                  className="object-fit h-8 w-8 rounded-full bg-white"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="mt-auto flex gap-8">
                {project.links.map((link) => (
                  <p
                    key={link.label}
                    className="group relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-200"
                  >
                    <LinkIcon className="h-6 w-6 flex-none group-hover:text-teal-500" />
                    <Link
                      className="ml-2 group-hover:text-teal-500"
                      href={link.href}
                    >
                      <a>{link.label}</a>
                    </Link>
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
