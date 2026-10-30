import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'jsx', 'mdx'],
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
