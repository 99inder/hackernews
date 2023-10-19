import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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
        wrapper.setAttribute('class', 'ml-8 mt-10');

        let authorName = document.createElement('p');
        authorName.innerHTML = item?.author;
        wrapper.appendChild(authorName);

        let text = document.createElement('p');
        text.innerHTML = item?.text;
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
        // eslint-disable-next-line
    }, [postData])

    return (

        postData === null ?

            <div>NO DATA</div> :

            <div>
                <div>
                    <h4 className='text-2xl font-semibold'>{postData.title}</h4>
                    <span className='text-sm font-bold text-slate-400'>
                        {postData.points} points
                    </span>
                </div>

                <div>
                    {postData.author}
                </div>


                {/* Comments */}
                <div id='content'>

                </div>
            </div>


    )
}

export default PostId