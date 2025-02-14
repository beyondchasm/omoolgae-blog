import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const ProfileImage: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const profileImageDir = cfg?.profileImageDir ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <div class={ classNames(displayClass, "profile-image")}>
      <img src={`${profileImageDir}`} alt="Profile Image" />
    </div>
  )
}

ProfileImage.css = `
.profile-image {
  text-align: center;
  max-width: 100%; /* 부모 요소에 맞게 크기 제한 */
}

.profile-image img {
  width: 100%;         /* 부모 요소 너비에 맞춰 확장 */
  max-width: 150px;    /* 최대 크기 제한 */
  height: auto;        /* 비율 유지하며 높이 자동 조정 */
  border-radius: 50%;  /* 원형 이미지 */
  object-fit: cover;   /* 비율 유지하면서 잘림 */
  aspect-ratio: 1 / 1; /* 가로세로 비율 유지 */
}

@media (max-width: 800px) {
    .profile-image img {
        display:flex
    }

    .profile-image img {
        display: none
    }
}
`

export default (() => ProfileImage) satisfies QuartzComponentConstructor