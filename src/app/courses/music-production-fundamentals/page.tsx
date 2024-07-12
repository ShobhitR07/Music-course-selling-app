'use client'
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'

function page() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
    <div className=" font-bold text-center text-white relative z-20">
    Preparation: Setting up the recording space, tuning instruments, and warming up vocals.
Tracking: Capturing the performances of instruments and vocals using microphones and direct inputs.
Microphone Techniques: Choosing the right microphone and placement for different instruments and voices.
Layering: Recording multiple takes and overdubbing to build the song’s texture.
    </div>
  </div>
  )
}

export default page
