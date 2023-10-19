import React, { useEffect, useState } from 'react'
import SearchField from '../components/Home/SearchField';
import SearchResultsList from '../components/Home/SearchResultsList';

const Home = () => {

    const [query, setQuery] = useState("");

    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            response = await response.json();
            console.log(response.hits);

            setResults(response.hits);

        })();
    }, [query])

    return (
        <div>
            <SearchField setQuery={setQuery} />
            <SearchResultsList results={results} />
        </div>
    )
}

export default Home