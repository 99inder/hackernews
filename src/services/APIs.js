const baseAPI = "https://hn.algolia.com/api/v1/";

export const APIs = {
    fetchTopicsApi: baseAPI + "search?query=",
    fetchPostDataApi: baseAPI + "items/",
}