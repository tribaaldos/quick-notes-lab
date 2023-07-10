export default function NotesListPage({ notes }) {
  const allNotes = notes.map((n, idx) => (
  <p key={idx}>{n.text}</p>))
  return (
    <div>{allNotes}</div>
  );
}