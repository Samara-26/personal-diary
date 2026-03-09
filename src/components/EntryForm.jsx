import React from 'react';
import { useState } from "react";

function EntryForm({ setEntries }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    content: ""
  });
  function handleChange(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  function handleClick() {
    const newEntry = formData;
    setEntries(prev => [newEntry, ...prev]);
    setFormData({
      title: "",
      date: "",
      image: "",
      content: ""
    });
  }
  return (
    <div className='flex items-center justify-around'>
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">My Personal Diary</h1>
        <p className="text-gray-600">Your personal space for thoughts and reflections</p>
      </div>
      <div className="flex gap-2">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write your thoughts..."
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button type='button' onClick={handleClick} className="flex items-center gap-2 px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-sm">+ New Entry</button>
    </div>
  )
}

export default EntryForm