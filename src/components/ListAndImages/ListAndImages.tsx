import { ProjectDocument } from '~prismicio-types-d'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useControlsStore } from '@/stores/controls'

type Props = {
  projectDocuments: ProjectDocument[]
}

export default function ListAndImages({ projectDocuments }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>()

  const setTitle = useControlsStore((state) => state.setTitle)

  return (
    <div className="flex w-full container">
      <div className="inline-flex flex-col content-start w-auto md:w-1/2">
        {projectDocuments.map((item, index) => (
          <Link
            href={`/project/${item.uid}`}
            key={index}
            onMouseEnter={() => {
              setTitle(item.data.title as string)
              setActiveIndex(index)
            }}
            onMouseLeave={() => {
              setTitle(undefined)

              setActiveIndex(undefined)
            }}
            className="inline-block w-auto"
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(undefined)}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.05 }}
              className={clsx('text-left w-auto', {
                underline: activeIndex === index,
              })}
            >
              <p className="text-large font-untitled">{item.data.title}</p>
            </motion.span>
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
