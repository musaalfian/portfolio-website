'use client'

import { notes } from '@/lib/data'
import EngineeringNotes from '@/components/EngineeringNotes'

export default function NotesPage() {
  return (
    <div className="min-h-screen">
      <div className="">
        <EngineeringNotes notes={notes} showAll={true} />
      </div>
    </div>
  )
}
