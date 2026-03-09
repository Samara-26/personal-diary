import React from 'react'

function EntryCard({ entry }) {
  return (
    <div className='overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition'>
      <img src={entry.image} alt={entry.title}
        className='h-52 w-full object-cover'
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{entry.title}</h3>
        <p className='text-sm text-gray-500'>{entry.date}</p>
      </div>
    </div>
  )
}

export default EntryCard