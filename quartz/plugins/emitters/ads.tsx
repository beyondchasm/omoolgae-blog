import { QuartzEmitterPlugin } from "../types"
import { FilePath, FullSlug } from "../../util/path"
import { write } from "./helpers"

export const Ads: QuartzEmitterPlugin = () => {
  return {
    name: "ads",
    getQuartzComponents() {
      return []
    },

    async emit(ctx, _content, resources): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const slug = "ads" as FullSlug

      // ✅ baseUrl에서 sitemap 경로 설정
      const sitemapUrl = `https://${cfg.baseUrl}/sitemap.xml`

      // ✅ ads.txt 내용 정의
      const adsTxtContent = `
      google.com, pub-2668656366673635, DIRECT, f08c47fec0942fa0
`.trim()

      return [
        await write({
          ctx,
          content: adsTxtContent, // ✅ 수정된 부분 (파일 내용 입력)
          slug,
          ext: ".txt",
        }),
      ]
    },
  }
}