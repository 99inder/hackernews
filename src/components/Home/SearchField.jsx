import React, { useRef } from 'react'

const SearchField = ({ setQuery }) => {

    const queryRef = useRef("");

    function handleSubmit(e) {
        setQuery(e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Enter the query'
                onChange={handleSubmit}
                ref={queryRef}
            />
        </div>
    )
}

export default SearchField