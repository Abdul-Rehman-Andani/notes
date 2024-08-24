import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <div className="search-group flex items-center gap-3 bg-slate-100 border rounded-lg p-2">
        <IoSearch />
        <input
          type="text"
          placeholder="Search notes"
          className="outline-none bg-slate-100 flex-1"
        />
      </div>
    </>
  );
};

export default SearchBar;
