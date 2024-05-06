export default function Contact({ contacts, onDelete }) {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}
