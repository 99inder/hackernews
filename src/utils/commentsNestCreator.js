import dateFormatter from "./dateFormatter";

const createNest = (item) => {
    if (!item)
        return document.createElement('span');

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'pl-5 pt-6');

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
        result.classList.add("border-dashed");
        result.classList.add("border-l-[1px]");
        result.classList.add("border-black");
        console.log(...wrapper.classList);
    }
    return wrapper;
}

const commentsNestCreator = (div, postData) => {



    if (!div || !postData || !postData.children || postData?.children.length === 0)
        return;

    postData?.children.forEach((item) => {
        let res = createNest(item);
        div.appendChild(res);
    });
}

export default commentsNestCreator;