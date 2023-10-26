import { useEffect, useState } from "react";

function Search({ onSearch }) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        onSearch(search); 
    }, [onSearch, search])
    
    const handleSearch = () => {
        onSearch(search);
    }
    return (
        <div className="max-w-md mx-auto p-4">
            <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"

                />
                <button
                    onClick={handleSearch}
                    type="button"
                    className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
                >
                    Search
                </button>
            </div>
        </div>
    )
}
export default Search