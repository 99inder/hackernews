import React, { useRef } from 'react'

const SearchField = ({ setQuery }) => {

    const queryRef = useRef("");

    function handleSubmit(e) {
        setQuery(e.target.value);
    }

    return (
        <div className='bg-orange-nav h-[3.5rem] flex items-center pl-4 fixed top-0 w-11/12 max-w-maxContent'>
            <input
                className='w-2/3 h-3/5 px-4 rounded-md'
                type="text"
                placeholder='Enter the query'
                onChange={handleSubmit}
                ref={queryRef}
            />
        </div>
    )
}

export default SearchField