import Image from 'next/image'
import { ProjectBannerSliceDefaultPrimary } from '~prismicio-types-d'

export default function ProjectBanner({
  image,
}: ProjectBannerSliceDefaultPrimary) {
  return (
    <div className="container grid max-w-4xl py-24 md:min-h-screen">
      <div className="md:aspect-[12/9] relative md:h-full w-full h-96">
        <Image
          className="object-contain w-full h-full py-6 md:py-24"
          fill
          src={image.url ?? ''}
          alt={image.alt ?? ''}
        />
      </div>
    </div>
  )
}
