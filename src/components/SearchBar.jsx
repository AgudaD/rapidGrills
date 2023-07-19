import search from "../assets/Search.gif";

const SearchBar = () => {
  return (
    <div className="mt-5">
      <div className="relative">
        <input
          type="search"
          placeholder="search food"
          className="w-full rounded-lg px-12 py-1.5 shadow-xl outline-none drop-shadow-md placeholder:tracking-wider"
        />
        <img src={search} alt="" className="absolute left-1.5 top-1.5 w-6" />
      </div>
    </div>
  );
};

export default SearchBar;
