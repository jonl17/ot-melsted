'use client'
import Image from 'next/image'
import { FrontpageHeroSliceSliceDefaultPrimary } from '~prismicio-types-d'
import { motion } from 'framer-motion'

export default function FrontpageHero({
  hero_image,
  text,
}: FrontpageHeroSliceSliceDefaultPrimary) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-screen"
    >
      <Image
        className="object-cover"
        fill
        src={hero_image.url ?? ''}
        alt="Ot Melsted Hero Image"
      />
    </motion.div>
  )
}
