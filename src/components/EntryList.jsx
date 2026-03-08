import React from 'react'
import EntryCard from './EntryCard'

function EntryList({ entries }) {
  return (
    <div>
      <h2>Entries</h2>
      <p>No entries yet</p>
      {entries.map((entry) => (
        <EntryCard /* key={entry.date} */ entry={entry}/>
      ))}
    </div>
  )
}

export default EntryList