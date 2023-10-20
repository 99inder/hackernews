import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import dateFormatter from '../utils/dateFormatter';
import commentsNestCreator from '../utils/commentsNestCreator';
import Spinner from '../components/common/Spinner';
import { fetchPostData } from '../services/fetchDataApi';

const PostPage = () => {

    const [postData, setPostData] = useState(null);

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchPostData(id, setPostData, setIsLoading, setIsError);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const contentDiv = document.getElementById("content");
        commentsNestCreator(contentDiv, postData);

        // eslint-disable-next-line
    }, [postData])

    return (

        isLoading ?
            <Spinner /> :
            isError ?
                <div className="text-2xl text-center font-bold py-20 text-slate-700 flex items-center justify-center bg-container h-screen">
                    Some Error Occured
                </div>
                :

                postData === null ?

                    <div className="text-2xl text-center font-bold py-20 text-slate-700 flex items-center justify-center bg-container h-screen">
                        No Data Found
                    </div> :

                    <div className='w-full md:w-11/12 max-w-maxContent mx-auto bg-container'>
                        <div className='bg-orange-nav pl-4'>
                            <h4 className='text-2xl font-extrabold text-white'>{postData.title}</h4>
                            <span className='text-sm font-medium text-slate-100'>
                                {postData.points} points by {postData.author} on {dateFormatter(postData.created_at)}
                            </span>
                        </div>
                        {
                            !postData.children || postData?.children.length === 0 ?
                                <div className="text-2xl text-center font-bold py-20 text-slate-700 flex items-center justify-center h-full">
                                    No Comments
                                </div> :

                                // Comments
                                <div id='content' className='overflow-hidden pb-6'>

                                </div>
                        }

                    </div >


    )
}

export default PostPage