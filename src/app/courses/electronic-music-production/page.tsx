'use client'
import React from 'react'
import { Vortex } from '@/components/ui/vortex'


function page() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div>
        Synthesis: Creating sounds from scratch using synthesizers. Key types include:
Subtractive Synthesis: Shaping sound by subtracting frequencies from a rich sound source.
FM Synthesis: Using one waveform to modulate another to create complex sounds.
Wavetable Synthesis: Using waveforms stored in tables for dynamic sound creation.
Sampling: Using pre-recorded sounds and manipulating them. Techniques include:
Time-Stretching: Changing the length of a sample without affecting its pitch.
Pitch-Shifting: Changing the pitch of a sample without affecting its length.
Looping: Repeating a section of audio seamlessly.
        </div>
      </Vortex>
    </div>
  )
}

export default page
