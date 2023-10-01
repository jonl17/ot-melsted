import Image from 'next/image'
import { ProjectBannerSliceDefaultPrimary } from '~prismicio-types-d'

export default function ProjectBanner({
  image,
}: ProjectBannerSliceDefaultPrimary) {
  return (
    <div className="container grid max-w-4xl min-h-screen">
      <div className="aspect-[12/9] relative h-full w-full">
        <Image
          className="object-contain w-full h-full py-12 lg:py-24"
          fill
          src={image.url ?? ''}
          alt={image.alt ?? ''}
        />
      </div>
    </div>
  )
}
