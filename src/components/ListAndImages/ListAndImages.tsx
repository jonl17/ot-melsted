import { ProjectDocument } from '~prismicio-types-d'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function ListAndImages({ projectDocuments }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()

  return (
    <div className="flex w-full container">
      <div className="inline-grid content-start w-full md:w-1/2">
        {projectDocuments.map((item, index) => (
          <Link href={`/project/${item.uid}`} key={index}>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              className={clsx('text-left', {
                underline: activeIndex === index,
              })}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(undefined)}
            >
              <p className="text-large font-untitled">{item.data.title}</p>
            </motion.button>
          </Link>
        ))}
      </div>
      {/* images here */}
      <div className="relative w-full h-[400px] hidden md:block">
        {projectDocuments.map((item, index) => (
          <AnimatePresence key={index}>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={clsx(
                  'absolute top-0 grid w-full h-full place-content-center'
                )}
              >
                <Image
                  fill
                  className="object-contain"
                  src={item.data.featured_image.url ?? ''}
                  alt={item.data.featured_image.alt ?? ''}
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  )
}
