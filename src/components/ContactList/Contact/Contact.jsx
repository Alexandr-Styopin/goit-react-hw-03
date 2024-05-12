export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <li>
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
  );
}
