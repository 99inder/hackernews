import React from 'react'
import { useNavigate } from 'react-router'

const SearchResultsList = ({ results }) => {

    const navigate = useNavigate();

    const handleClick = (elem) => {
        navigate(`/postId/${elem?.objectID}`);
    }

    console.log(results);

    return (
        results.length === 0
            ?
            <div>
                No Results Found
            </div>
            :
            <div className=' w-full bg-container py-5 px-3 mt-[3.5rem]'>
                {
                    results.map(elem => (
                        elem.title &&
                        <div
                            key={elem?.objectID}
                            className='my-1 hover:bg-slate-200 hover:rounded-md px-4 py-2 w-fit transition-all duration-75 cursor-pointer'
                            onClick={() => handleClick(elem)}
                        >
                            <h2 className='font-medium'>{elem.title}</h2>
                            <div className='text-sm text-slate-500'>
                                <span>{`${elem.points} points | ${elem.author} | ${elem.num_comments} comments`}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default SearchResultsList