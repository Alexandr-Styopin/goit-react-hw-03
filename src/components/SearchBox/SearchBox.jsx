export default function SearchBox({ onFilterChange, filter }) {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={onFilterChange} />
    </label>
  );
}
