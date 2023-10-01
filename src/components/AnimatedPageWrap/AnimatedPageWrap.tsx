'use client'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function AnimatedPageWrap({ children }: Props) {
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
