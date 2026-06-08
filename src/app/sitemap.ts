import { MetadataRoute } from 'next'
import { PORTFOLIO_DATA } from '@/lib/data'
import { slugify } from '@/lib/utils'

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://christopherorea.github.io/mycv';

  const projectUrls = PORTFOLIO_DATA.featured_projects.projects.map((project) => ({
    url: `${siteUrl}/projects/${slugify(project.title)}`,
    lastModified: new Date(),
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
        url: `${siteUrl}/ia-ready`,
        lastModified: new Date(),
    }
  ]

  return [
    ...staticUrls,
    ...projectUrls,
  ]
}