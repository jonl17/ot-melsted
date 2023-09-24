import FrontpageHero from '@/components/FrontpageHero/FrontpageHero'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `FrontpageHeroSlice`.
 */
export type FrontpageHeroSliceProps =
  SliceComponentProps<Content.FrontpageHeroSliceSlice>

/**
 * Component for "FrontpageHeroSlice" Slices.
 */
const FrontpageHeroSlice = ({
  slice,
}: FrontpageHeroSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FrontpageHero
        hero_image={slice.primary.hero_image}
        text={slice.primary.text}
      />
    </section>
  )
}

export default FrontpageHeroSlice
