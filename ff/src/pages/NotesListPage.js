import React from 'react'
import notes from '../assets/data'
import ListItems from '../components/ListItems'

const NotesListPage = () => {
  return (
    <div>
      <div className='notes-list'>
        {notes.map((note, index) => (
          <ListItems key={index} note={note} />
        ))}
      </div>
    </div>
  )
}

export default NotesListPage