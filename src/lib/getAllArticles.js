import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `src/pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))
  console.log(articles)

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}
