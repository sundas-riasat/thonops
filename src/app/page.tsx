'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Zap, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic Lighting Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 cinematic-glow opacity-60"></div>
      </div>

      <div className="z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="inline-flex glass-panel px-4 py-2 rounded-full mb-8 items-center gap-2 text-sm text-sky-400 font-medium"
        >
          <Zap className="w-4 h-4" />
          <span>ThonOps 1.0 is now live</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
        >
          Elevate Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Hackathon
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        >
          A high-performance, real-time command center for modern developers, judges, and organizers. Built for speed and collaboration.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
        >
          <Link href="/dashboard/team">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-full text-lg h-auto">
              Open Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/dashboard/organizer">
            <Button size="lg" variant="outline" className="glass hover:bg-white/10 px-8 py-6 rounded-full text-lg h-auto relative overflow-hidden group">
              <span className="relative z-10 text-white">Organizer View</span>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative floating components */}
      <div className="absolute inset-x-0 bottom-0 top-[60vh] md:top-[70vh] flex justify-center perspective-1000 z-0 opacity-50">
         <motion.div 
            initial={{ opacity: 0, rotateX: 60, y: 100 }}
            animate={{ opacity: 1, rotateX: 45, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: 'spring', bounce: 0.3 }}
            className="w-[80vw] md:w-[60vw] h-[50vh] glass-panel rounded-t-3xl border-t border-x border-white/10 shadow-[0_-20px_50px_rgba(56,189,248,0.1)] relative overflow-hidden flex flex-col p-8"
          >
             <div className="flex gap-4 mb-8 border-b border-white/5 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="space-y-4">
               <div className="h-4 w-3/4 bg-white/5 rounded"></div>
               <div className="h-4 w-1/2 bg-white/5 rounded"></div>
               <div className="h-10 w-full bg-white/5 rounded mt-4"></div>
             </div>
          </motion.div>
      </div>
    </main>
  )
}
