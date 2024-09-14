import { FiSearch } from "react-icons/fi";

function Search(){
    return(
        <div className="rounded w-64 bg-white">
            <input type="text" name="search" placeholder="Find your next favorite movie" className="w-56 h-8 mx-1" />
            <button><FiSearch className="inline text-[#86C232]"/></button>
        </div>
    )
}

export default Search;