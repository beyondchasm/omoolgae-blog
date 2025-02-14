import{PageLayout, SharedLayout}from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
head: Component.Head(),
  header: [
  ],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // data-repo
        repo: 'beyondchasm/omoolgae-blog',
        // data-repo-id
        repoId: 'R_kgDON5SDfQ',
        // data-category
        category: 'Announcements',
        // data-category-id
        categoryId: 'DIC_kwDON5SDfc4Cm9Gy',
        mapping: 'pathname',
        darkTheme: 'true',
      }
    }),
  ],
  footer: Component.Footer({
    
    links: {
      GitHub: "https://github.com/beyondchasm",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.ProfileImage(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
    // Component.Hits(),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.ProfileImage(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
