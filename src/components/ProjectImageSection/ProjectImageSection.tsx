import { ImageField } from '@prismicio/client'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  firstImage?: ImageField
  secondImage?: ImageField
  container: boolean
}

export default function ProjectImageSection({
  firstImage,
  secondImage,
  container,
}: Props) {
  if (!firstImage) return null

  const hasSecondImage = !!secondImage?.url

  return (
    <div className={clsx(container && 'container max-w-4xl')}>
      <div
        className={clsx('relative h-full w-full grid place-content-center', {
          'grid-cols-2 gap-5 md:gap-10': hasSecondImage,
        })}
      >
        <Image
          className="object-cover h-full py-6 md:py-24"
          height={firstImage.dimensions?.height}
          width={firstImage.dimensions?.width}
          src={firstImage.url ?? ''}
          alt={firstImage.alt ?? ''}
        />
        {hasSecondImage ? (
          <Image
            className="object-cover h-full py-6 md:py-24"
            height={secondImage.dimensions?.height}
            width={secondImage.dimensions?.width}
            src={secondImage.url ?? ''}
            alt={secondImage.alt ?? ''}
          />
        ) : null}
      </div>
    </div>
  )
}
