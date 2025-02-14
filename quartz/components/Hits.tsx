import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const Hits: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={ classNames(displayClass, "hits")}>
      <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fomoolgae-blog.vercel.app&count_bg=%230015FF&title_bg=%23000000&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
    </div>
    
  )
}
Hits.css = `
.hits {
  text-align: center;
  max-width: 100%; /* 부모 요소에 맞게 크기 제한 */
}

@media (max-width: 800px) {
    .hits {
        display:flex
    }

    .hits {
        display: none
    }
}
`

export default (() => Hits) satisfies QuartzComponentConstructor