import React, { useRef } from 'react'

const SearchField = ({ setQuery }) => {

    const queryRef = useRef("");

    function handleSubmit(e) {
        e.preventDefault();
        setQuery(queryRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Enter the query'
                    ref={queryRef}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchField