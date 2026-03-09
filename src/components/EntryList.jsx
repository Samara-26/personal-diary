import React from 'react'
import EntryCard from './EntryCard'

function EntryList({ entries }) {
  return (
    <div className='mt-10'>
      <h2 className='mb-6 text-2xl font-bold text-slate-900'>Entries</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {entries.map((entry) => (
          <EntryCard key={entry.date} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default EntryList