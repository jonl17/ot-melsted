'use client'
import { useControlsStore } from '@/stores/controls'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
  title: string
}

export default function AnimatedPageWrap({ children, title }: Props) {
  const { setTitle } = useControlsStore()

  useEffect(() => {
    setTitle(title)
  }, [setTitle, title])

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'spring', duration: 1 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}
