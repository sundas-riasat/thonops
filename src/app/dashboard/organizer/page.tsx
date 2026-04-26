'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Radio, Send, TerminalSquare } from 'lucide-react'
import { toast } from 'sonner'

export default function OrganizerDashboard() {
  const [broadcastMessage, setBroadcastMessage] = useState('')
  const [markdown, setMarkdown] = useState('# Problem Statement 1\n\nDescribe the challenge here...')

  const sendBroadcast = () => {
    if (!broadcastMessage) return
    // In actual implementation, this dispatches via Supabase Realtime channel
    toast('Global Broadcast Sent', {
      description: broadcastMessage,
      icon: <Radio className="w-4 h-4 text-purple-400" />
    })
    setBroadcastMessage('')
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] cinematic-glow-purple opacity-20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end border-b border-white/10 pb-6"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
               <TerminalSquare className="w-8 h-8 text-purple-500" />
               Command Center
            </h1>
            <p className="text-zinc-400">Organizer administrative tools and live event controls.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Markdown Editor Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-panel border-white/10 text-white h-full shadow-2xl shadow-black/50">
              <CardHeader className="bg-white/[0.02] border-b border-white/5">
                <CardTitle className="text-xl">Live Problem Editor</CardTitle>
                <CardDescription className="text-zinc-400">Markdown updates push instantly to participants.</CardDescription>
              </CardHeader>
              <CardContent className="p-4 h-[400px] flex flex-col gap-4">
                <textarea 
                   className="flex-1 w-full bg-black/50 border border-white/10 rounded-md p-4 text-zinc-300 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                   value={markdown}
                   onChange={(e) => setMarkdown(e.target.value)}
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-auto">
                   Publish Changes to All Teams
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Broadcast Area & Controls */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass border-purple-500/20 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="w-5 h-5 text-purple-400" />
                  Global Broadcast
                </CardTitle>
                <CardDescription className="text-zinc-400">Send instant toast notifications to all active clients.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                   value={broadcastMessage}
                   onChange={(e) => setBroadcastMessage(e.target.value)}
                   placeholder="e.g. 15 minutes remaining!" 
                   className="bg-black/50 border-white/10 text-zinc-300 focus-visible:ring-purple-500" 
                />
                <Button onClick={sendBroadcast} className="w-full bg-white text-black hover:bg-zinc-200">
                  <Send className="w-4 h-4 mr-2" />
                  Dispatch Signal
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-zinc-400 uppercase tracking-wider">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm font-mono">
                   <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Active WebSocket Connections</span>
                      <span className="text-green-400">234</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Judge0 Queue</span>
                      <span className="text-yellow-400">3 Pending</span>
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Database Load</span>
                      <span className="text-white">12%</span>
                   </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
