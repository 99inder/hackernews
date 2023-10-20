import React, { useRef } from 'react'
import { BsSearch } from "react-icons/bs"

const SearchField = ({ setQuery }) => {

    const queryRef = useRef("");

    function handleSubmit(e) {
        setQuery(e.target.value);
    }

    return (
        <div className='bg-orange-nav h-[3.5rem] flex items-center pl-4 fixed top-0 w-screen md:w-11/12 max-w-maxContent'>
            <input
                className='w-2/3 h-3/5 px-4 pl-12 text-slate-600 focus:font-medium outline-none focus:border-blue-400 focus:shadow-md shadow-blue-400 border-2'
                type="text"
                placeholder='Enter the query'
                onChange={handleSubmit}
                ref={queryRef}
            />
            <div className='absolute left-7 text-lg text-orange-nav'>
                <BsSearch />
            </div>
        </div>
    )
}

export default SearchField