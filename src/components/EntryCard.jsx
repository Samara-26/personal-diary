import React from 'react'

function EntryCard({ entry }) {
  return (
    <div>
      <img src={entry.image} alt={entry.title} />
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
    </div>
  )
}

export default EntryCard