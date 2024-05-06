import Contact from "./Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul>
        <Contact contacts={contacts} onDelete={onDelete} />
      </ul>
    </div>
  );
}
