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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring' }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}
