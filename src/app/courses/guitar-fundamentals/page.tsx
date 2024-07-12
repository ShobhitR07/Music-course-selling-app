'use client'
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from "framer-motion";

function page() {
  return (
    <div>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4" >
            <div className='text-center text-2xl text-blue-50'>"The guitar is a small orchestra. It is polyphonic. Every string is a different color, a different voice." </div>
            <div className='text-center  text-blue-50'>— Andrés Segovia </div>
      </motion.div>
    </AuroraBackground>
    </div>
  )
}

export default page
