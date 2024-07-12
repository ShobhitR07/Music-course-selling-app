"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

function page() {
  return (
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 500 }}
      whileInView={{ opacity: 1, y: 100 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center  tracking-tight text-transparent "
    >
      <div>Advanced vocal techniques are essential for singers looking to expand their range, control, and expressiveness. Here is a list of advanced vocal techniques:<br/>

Belting: Singing in a powerful, sustained voice often used in musical theatre and pop music.<br/>
Falsetto: A higher pitch range achieved by shifting the vocal cords.<br/>
Head Voice: The upper register of the voice, typically used for higher notes.<br/>
Chest Voice: The lower register of the voice, used for stronger, fuller tones.<br/>
Mix Voice: Blending chest and head voice for a smooth transition between registers.<br/>
Vibrato: A slight fluctuation in pitch to add richness and depth to the sound.<br/>
Riffing and Runs: Quick, melodic embellishments often used in R&B and gospel music.<br/>
Yodeling: Rapidly switching between chest and head voice.<br/>
Growling: A rough, guttural sound often used in rock and metal.<br/>
Screaming: Intense vocal technique used in genres like metal and hardcore.<br/>
Melisma: Singing a single syllable of text while moving between several different notes in succession.<br/>
Scatting: Improvised vocal jazz singing with nonsensical syllables.<br/>
Overtone Singing: Producing multiple pitches simultaneously by manipulating the vocal tract.<br/>
Whistle Register: The highest register of the human voice, above the head voice.<br/>
Cry Technique: A vocal effect that mimics the sound of crying, often used to convey emotion.<br/>
Twang: A bright, brassy sound produced by narrowing the vocal tract.<br/>
These techniques require practice and vocal training to master, and often singers work with vocal coaches to develop these skills safely and effectively.</div>
    </motion.h1>
  </LampContainer>
  )
}

export default page
