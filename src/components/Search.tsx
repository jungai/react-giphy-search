import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

interface Props {
    searchText: string;
    onSubmitSearchText: (data: string) => void;
}

const Search: React.FC<Props> = ({ searchText, onSubmitSearchText }) => {
    const [ isActiveSearch, setActiveSearch] = useState(false);

    return (
        <div
            className="flex items-center p-4 border-2 rounded-full py-3 px-6 bg-white"
            onMouseEnter={() => setActiveSearch(true)}
            onMouseLeave={() => setActiveSearch(false)}
        >
            {
                isActiveSearch &&
                <input
                    className="border-0 outline-none"
                    value={searchText}
                    onChange={(e) => onSubmitSearchText(e.target.value)}
                    type="text"
                /> 
            }
            <button>
                <FcSearch size="2em" />
            </button>
        </div>
    )
}

export default Search;