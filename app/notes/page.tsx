'use client';

import { notes } from '@/lib/data';
import EngineeringNotes from '@/components/EngineeringNotes';

export default function NotesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <EngineeringNotes notes={notes} showAll={true} />
      </div>
    </div>
  );
}
