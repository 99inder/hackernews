import React from 'react'
import { useNavigate } from 'react-router'

const SearchResultsList = ({ results }) => {

    const navigate = useNavigate();

    const handleClick = (elem) => {
        navigate(`/postId/${elem?.objectID}`);
    }

    return (
        results.length === 0
            ?
            <div>
                No Results Found
            </div>
            :
            <div>
                {
                    results.map(elem => (
                        <div
                            className='border-2 my-3 w-fit'
                            onClick={() => handleClick(elem)}
                        >
                            <h2>{elem.title}</h2>
                        </div>
                    ))
                }
            </div>
    )
}

export default SearchResultsList