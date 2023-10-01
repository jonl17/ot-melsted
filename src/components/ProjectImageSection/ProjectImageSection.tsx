import { ImageField } from '@prismicio/client'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  firstImage?: ImageField
  secondImage?: ImageField
}

export default function ProjectImageSection({
  firstImage,
  secondImage,
}: Props) {
  if (!firstImage) return null

  const hasSecondImage = !!secondImage?.url

  return (
    <div className="container max-w-4xl">
      <div
        className={clsx('relative h-full w-full', {
          'grid grid-cols-2 gap-10': hasSecondImage,
        })}
      >
        <Image
          className="object-cover h-full py-12 lg:py-24"
          height={firstImage.dimensions?.height}
          width={firstImage.dimensions?.width}
          src={firstImage.url ?? ''}
          alt={firstImage.alt ?? ''}
        />
        {hasSecondImage ? (
          <Image
            className="object-cover h-full py-12 lg:py-24"
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
