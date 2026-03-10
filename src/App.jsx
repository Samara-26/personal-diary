import { useEffect, useState } from 'react'
import EntryForm from './components/EntryForm'
import EntryList from './components/EntryList';

function App() {
  //Read and render stored entries when the app first mounts
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("entries");
    return stored ? JSON.parse(stored) : [];
  });

  //Store diary entries as an array in localStorage
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);
  return (
    <div className='min-h-screen bg-slate-100 py-10'>
      <div className='mx-auto max-w-6xl px-4'>
        <EntryForm setEntries={setEntries} />
        <EntryList entries={entries} />
      </div>
    </div>
  )
}

export default App
