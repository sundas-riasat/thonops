'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createTeam(formData: FormData) {
  const supabase = await createClient()
  const teamName = formData.get('teamName') as string

  // Using a stub if no proper auth info is available
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { success: false, message: 'Unauthorized' }
  }

  const { data: team, error } = await supabase
    .from('teams')
    .insert([{ name: teamName, invite_code: crypto.randomUUID() }])
    .select()
    .single()

  if (error) {
    return { success: false, message: error.message }
  }

  // Join the creator to the team
  await supabase
    .from('team_members')
    .insert([{ team_id: team.id, user_id: user.id }])

  revalidatePath('/dashboard/team')
  return { success: true, data: team }
}
