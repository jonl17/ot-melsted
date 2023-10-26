'use client'
import { PAGE_TITLE } from '@/constants'
import Close from '@/icons/Close'
import { useControlsStore } from '@/stores/controls'
import { useShowcaseLayoutStore } from '@/stores/showcaseLayout'
import { ShowcaseLayoutType } from '@/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
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

  const { back } = useRouter()

  useEffect(() => {
    function callback() {
      // only applies to the homepage
      if (pathname === '/') {
        if (window.scrollY < window.innerHeight * 0.65) {
          setTitle(PAGE_TITLE)
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
      <motion.nav
        className={clsx(
          'py-1 rounded-full px-2 overflow-hidden transition-all',
          {
            'bg-gray/50': title !== undefined,
          }
        )}
      >
        <AnimatePresence mode="wait">
          {title ? (
            <button
              onClick={() => back()}
              className="flex place-items-center gap-3 h-full"
            >
              <motion.h1
                key={title}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{
                  bounce: false,
                  duration: 0.2,
                  // ease: 'easeOut',
                }}
                className="h-full grid items-center text-medium font-normal text-black"
              >
                {title}
              </motion.h1>
              {title !== PAGE_TITLE && <Close className="h-5 w-5 text-black" />}
            </button>
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
              className="flex gap-3 items-center h-full"
            >
              {layoutOptions.map((availableLayout, key) => (
                <motion.button
                  initial={{ y: '-100%' }}
                  animate={{ y: '0' }}
                  exit={{ y: '100%' }}
                  transition={{ delay: key * 0.05 }}
                  className={clsx(
                    'grid content-center w-5 h-5 shadow rounded-full backdrop-blur-xl',
                    {
                      'bg-black': layout === availableLayout,
                      'bg-gray/50': layout !== availableLayout,
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
