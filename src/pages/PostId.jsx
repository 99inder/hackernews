import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import dateFormatter from '../utils/dateFormatter';

const PostId = () => {

    const [postData, setPostData] = useState(null);

    const { id } = useParams();

    const fetchPostData = async (id) => {
        let response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
        response = await response.json();

        return response;
    }

    useEffect(() => {
        (async () => {
            const data = await fetchPostData(id);
            setPostData(data);
        })();
        // eslint-disable-next-line
    }, []);


    const createNest = (item) => {
        if (!item)
            return document.createElement('span');

        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'ml-5 mt-6');

        let authorName = document.createElement('p');
        authorName.innerHTML = `${item?.author} on ${dateFormatter(item.created_at)}`;
        authorName.setAttribute('class', 'text-xs text-slate-500');
        wrapper.appendChild(authorName);
        
        let text = document.createElement('p');
        text.innerHTML = item?.text;
        text.setAttribute('class', 'text-sm whitespace-break-spaces');
        wrapper.appendChild(text);

        for (let i = 0; i < item.children.length; i++) {
            let result = createNest(item.children[i]);
            wrapper.appendChild(result);
        }
        return wrapper;
    }

    const populateData = () => {
        const content = document.getElementById('content');

        postData?.children.forEach((item) => {
            let res = createNest(item);
            content.appendChild(res);
        });
    }

    useEffect(() => {
        populateData();
        console.log(postData);
        // eslint-disable-next-line
    }, [postData])

    return (

        postData === null ?

            <div>NO DATA</div> :

            <div className='w-11/12 max-w-maxContent mx-auto bg-container'>
                <div className='bg-orange-nav pl-4'>
                    <h4 className='text-2xl font-extrabold text-white'>{postData.title}</h4>
                    <span className='text-sm font-medium text-slate-100'>
                        {postData.points} points by {postData.author} on {dateFormatter(postData.created_at)}
                    </span>
                </div>

                {/* Comments */}
                <div id='content' className='overflow-hidden'>

                </div>
            </div>


    )
}

export default PostId