'use client'
import { useControlsStore } from '@/stores/controls'
import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const layoutOptions: ShowcaseLayoutType[] = [
  'abstract-column',
  'list',
  'single-column',
]

export default function ShowcaseControls() {
  const { setLayout, layout } = useShowcaseLayoutStore()
  const { title, setTitle } = useControlsStore()

  console.log(title)

  function layoutChangeCallback() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  const pathname = usePathname()

  useEffect(() => {
    function callback() {
      // only applies to the homepage
      if (pathname === '/') {
        if (window.scrollY < window.innerHeight * 0.65) {
          setTitle('OT.Melsted')
        } else {
          setTitle(undefined)
        }
      }
    }

    document.addEventListener('scroll', callback)
    return () => document.removeEventListener('scroll', callback)
  }, [setTitle, pathname])

  return (
    <div className="fixed z-40 grid justify-center w-full top-12">
      <motion.nav className="h-12 bg-gray/20 backdrop-blur-xl rounded-full  px-6 shadow overflow-hidden transition-all">
        <AnimatePresence mode="wait">
          {title ? (
            <Link href="/">
              <motion.h1
                key={title}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '100%' }}
                transition={{
                  bounce: false,
                  duration: 0.2,
                  ease: 'anticipate',
                }}
                className="h-full grid items-center text-medium font-bold"
              >
                {title}
              </motion.h1>
            </Link>
          ) : (
            <motion.span
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                bounce: false,
                duration: 0.2,
                ease: 'anticipate',
              }}
              className="flex gap-5 items-center h-full"
            >
              {layoutOptions.map((availableLayout, key) => (
                <motion.button
                  initial={{ y: '-100%' }}
                  animate={{ y: '0' }}
                  exit={{ y: '100%' }}
                  transition={{ delay: key * 0.1 }}
                  className={clsx(
                    'grid content-center w-3 h-3 shadow rounded-full',
                    {
                      'bg-white': layout === availableLayout,
                      'bg-darkgray/50': layout !== availableLayout,
                    }
                  )}
                  onClick={() => {
                    setLayout(availableLayout)
                    layoutChangeCallback()
                  }}
                  key={key}
                />
              ))}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
