import React from 'react'

function EntryForm() {
  return (
    <div className='flex items-center justify-around'>
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">My Personal Diary</h1>
        <p className="text-gray-600">Your personal space for thoughts and reflections</p>
      </div>
      <button type='button' className="flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm">+ New Entry</button>
    </div>
  )
}

export default EntryForm