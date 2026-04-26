export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'Participant' | 'Judge' | 'Organizer'
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'Participant' | 'Judge' | 'Organizer'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'Participant' | 'Judge' | 'Organizer'
          created_at?: string
        }
      }
      teams: {
        Row: {
          id: string
          name: string
          invite_code: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          invite_code?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          invite_code?: string
          created_at?: string
        }
      }
      team_members: {
        Row: {
          id: string
          team_id: string
          user_id: string
          joined_at: string
        }
        Insert: {
          id?: string
          team_id: string
          user_id: string
          joined_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          user_id?: string
          joined_at?: string
        }
      }
      problems: {
        Row: {
          id: string
          title: string
          description_md: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description_md: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description_md?: string
          created_at?: string
        }
      }
    }
  }
}
