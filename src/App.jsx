import { useState } from 'react'
import EntryForm from './components/EntryForm'
import EntryList from './components/EntryList';

function App() {
const [entries, setEntries] = useState([]);

  return (
    <div>
      <EntryForm />
      <div>hello</div>
      <EntryList entries={entries}/>
    </div>
  )
}

export default App
