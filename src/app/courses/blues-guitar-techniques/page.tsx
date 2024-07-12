'use client'
import React from 'react'
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/utils/cn'

function page() {
  return (
    <div >
    {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

    <Boxes />
    <div className={cn("md:text-4xl text-xl text-white relative z-20 text-center top-96")}>
      blues
    </div>
    <p className="text-center mt-2 text-neutral-300 relative z-20">
      jazz blue
    </p>
  </div>
      
    
  )
}

export default page
