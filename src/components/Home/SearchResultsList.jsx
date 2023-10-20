import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { fetchTopics } from '../../services/fetchDataApi';
import Spinner from '../common/Spinner';

const SearchResultsList = ({ query }) => {

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchTopics(query, setResults, setIsLoading, setIsError);
    }, [query])

    const navigate = useNavigate();
    console.log(results)

    const handleClick = (elem) => {
        navigate(`/postId/${elem?.objectID}`);
    }

    return (
        isLoading ?
            <Spinner /> :
            <div className=' w-full bg-container md:px-3 min-h-screen'>
                {
                    isError ?
                        <div className="text-2xl text-center font-bold py-20 text-slate-700 flex items-center justify-center h-full">
                            Some Error Occured
                        </div>
                        :
                        !results || results.length === 0
                            ?
                            <div className="text-2xl text-center font-bold py-20 text-slate-700 flex items-center justify-center h-full">
                                No Results Found
                            </div>
                            :
                            <div className=' w-full bg-container  md:px-3 mt-[3.5rem]'>
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

                }
            </div>
    )
}

export default SearchResultsList