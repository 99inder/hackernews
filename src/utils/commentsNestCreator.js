import dateFormatter from "./dateFormatter";

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

const commentsNestCreator = (div, postData) => {

    

    if(!div || !postData || !postData.children || postData?.children.length === 0)
        return ;

    postData?.children.forEach((item) => {
        let res = createNest(item);
        div.appendChild(res);
    });
}

export default commentsNestCreator;