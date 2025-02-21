import { QuartzEmitterPlugin } from "../types"
import { FilePath, FullSlug } from "../../util/path"
import { write } from "./helpers"

export const Robots: QuartzEmitterPlugin = () => {
  return {
    name: "robots",
    getQuartzComponents() {
      return []
    },

    async emit(ctx, _content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const slug = "robots" as FullSlug

      // ✅ baseUrl에서 sitemap 경로 설정
      const sitemapUrl = `https://${cfg.baseUrl}/sitemap.xml`

      // ✅ robots.txt 내용 정의
      const robotsTxtContent = `
User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`.trim()

      return [
        await write({
          ctx,
          content: robotsTxtContent, // ✅ 수정된 부분 (파일 내용 입력)
          slug,
          ext: ".txt",
        }),
      ]
    },
  }
}