const SearchParams = () => {
  const location = "Oxford, UK";
  return (
    <div className="search-params">
      <form>
        <label>
        location
        <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;