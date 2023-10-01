'use client'
import Typography from '@/components/Typography'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type Props = {
  replaceAbout?: string
}

export default function Nav({ replaceAbout }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [invert, setInvert] = useState(true)

  const pathname = usePathname()

  useEffect(() => {
    const trigger = window.innerHeight * 0.95

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > trigger) {
        setInvert(false)
      } else {
        setInvert(true)
      }
    }

    if (ref.current && pathname === '/') {
      document.addEventListener('resize', handleScroll)
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('resize', handleScroll)
        document.removeEventListener('scroll', handleScroll)
      }
    } else setInvert(false)
  }, [pathname])

  function scrollBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 left-0 z-30 w-full h-24 -mb-24">
      <div className="container h-full mx-auto">
        <motion.div
          ref={ref}
          className="flex items-center justify-between h-full"
          initial={
            pathname === '/' ? { filter: 'invert(1)' } : { filter: 'invert(0)' }
          }
          animate={{ filter: invert ? 'invert(1)' : 'invert(0)' }}
        >
          <Link className="hover:opacity-60" href="/">
            <Typography element="h1" type="nav">
              OT.Melsted
            </Typography>
          </Link>
          {replaceAbout ? (
            <Typography element="h1" type="nav">
              {replaceAbout}
            </Typography>
          ) : (
            <motion.button className="hover:opacity-60" onClick={scrollBottom}>
              <Typography element="h1" type="nav">
                About
              </Typography>
            </motion.button>
          )}
        </motion.div>
      </div>
    </nav>
  )
}
