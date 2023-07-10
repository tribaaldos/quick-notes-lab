import { useEffect, useState } from "react";
import * as notesAPI from "../../utilities/notes-api"
import NotesListPage from "../NotesListPage/NotesListPage"


export default function NotesPage() {
  const [notes, setNotes] = useState([])

  const [formData, setFormData] = useState('')

  useEffect(() => {
    async function getAllNotes() {
      const notes = await notesAPI.getNotes()
      setNotes(notes)
    }
    getAllNotes()
  },[])
  console.log(notes)
  
  async function handleSubmit() {
    const note = await notesAPI.addNote(formData)
    console.log(note)
  }
  
  return (
    <>
        <h1>Notes Page</h1>
        <form onSubmit={handleSubmit} >
          <input name="text" value={formData} onChange={(evt) => setFormData(evt.target.value)}/>
          <button type="submit">SUBMIT</button>
        </form>
        {notes.length === 0 ? "No Notes Yet" : <NotesListPage notes={notes} />}
    </>
  );
}