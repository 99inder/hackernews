import React, { useState } from 'react'
import SearchField from '../components/Home/SearchField';
import SearchResultsList from '../components/Home/SearchResultsList';

const Home = () => {

    const [query, setQuery] = useState("");

    return (
        <div className='w-11/12 max-w-maxContent mx-auto h-full'>
            <SearchField setQuery={setQuery} />
            <SearchResultsList query={query} />
        </div>
    )
}

export default Home