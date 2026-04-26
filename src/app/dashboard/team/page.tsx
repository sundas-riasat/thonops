'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Copy, Plus, Users, Shield, Link as LinkIcon, Radio } from 'lucide-react'
import { toast } from 'sonner'

// Stub data for mock team while real auth is pending
const MOCK_TEAM = [
  { id: '1', name: 'Alex Rivera', role: 'Leader', status: 'online' },
  { id: '2', name: 'Sam Chen', role: 'Developer', status: 'online' },
  { id: '3', name: 'Jordan Lee', role: 'Designer', status: 'offline' },
]

export default function TeamDashboard() {
  const [inviteCode, setInviteCode] = useState('thon-ops-4b2a-uuid-9f1c')
  const [members, setMembers] = useState(MOCK_TEAM)

  // Simulate real-time member joining after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const newMember = { id: '4', name: 'Taylor Swift', role: 'Frontend', status: 'online' }
      setMembers(prev => [...prev, newMember])
      toast.success(`${newMember.name} joined the team!`, {
        description: "Real-time presence updated via Supabase.",
        icon: <Radio className="w-4 h-4 text-sky-400" />
      })
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const copyInvite = () => {
    navigator.clipboard.writeText(`https://thonops.dev/join/${inviteCode}`)
    toast('Invite link copied!', {
      description: 'Anyone with this link can join your team.',
    })
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] cinematic-glow opacity-30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end border-b border-white/10 pb-6"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Team Workspace</h1>
            <p className="text-zinc-400">Manage your hackathon squad and real-time collaboration.</p>
          </div>
          <Button className="glass bg-white/5 hover:bg-white/10 text-white rounded-full">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Members List - Span 2 cols */}
          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-panel border-white/10 text-white overflow-hidden shadow-2xl shadow-black">
              <CardHeader className="bg-white/[0.02] border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="w-5 h-5 text-sky-400" />
                  Active Members
                </CardTitle>
                <CardDescription className="text-zinc-400">Real-time sync enabled</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  <AnimatePresence>
                    {members.map((member, i) => (
                      <motion.div 
                        key={member.id}
                        initial={{ opacity: 0, height: 0, backgroundColor: "rgba(56,189,248,0.2)" }}
                        animate={{ opacity: 1, height: 'auto', backgroundColor: "transparent" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="h-12 w-12 border border-white/10">
                              <AvatarFallback className="bg-zinc-800 text-zinc-300">{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-black rounded-full ${member.status === 'online' ? 'bg-green-500' : 'bg-zinc-500'}`}></span>
                          </div>
                          <div>
                            <p className="font-medium text-white">{member.name}</p>
                            <p className="text-sm text-zinc-400">{member.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {member.role === 'Leader' && <Shield className="w-4 h-4 text-amber-400" />}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar Area */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-sky-400" />
                  Invite Teammates
                </CardTitle>
                <CardDescription className="text-zinc-400">Share this link to add members to your workspace.</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Input readOnly value={`thonops.dev/join/${inviteCode}`} className="bg-black/50 border-white/10 text-zinc-300 focus-visible:ring-sky-500" />
                <Button variant="secondary" onClick={copyInvite} className="bg-white/10 hover:bg-white/20 text-white border border-white/10">
                  <Copy className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Radio className="w-4 h-4 text-purple-400" />
                  Live Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                   <div className="flex items-start gap-3 text-zinc-300">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-sky-400"></div>
                      <p><span className="text-white font-medium">Alex Rivera</span> pushed code to <span className="font-mono text-xs bg-white/10 px-1 rounded">main</span></p>
                   </div>
                   <div className="flex items-start gap-3 text-zinc-300">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-purple-400"></div>
                      <p><span className="text-white font-medium">Sam Chen</span> started a Judge0 execution.</p>
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
