export const fetchTopics = async (query, setResults, setIsLoading, setIsError) => {

    setIsLoading(true);

    try {
        let response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        response = await response.json();

        setResults(response.hits);
    } catch (error) {
        console.log("Error Occured at fetchTopics API");
        console.error(error);
        setIsError(true);
    } finally {
        setIsLoading(false);
    }

}

export const fetchPostData = async (id, setPostData, setIsLoading, setIsError) => {

    console.log("Here")
    setIsLoading(true);

    try {
        let response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
        response = await response.json();

        setPostData(response);
    } catch (error) {
        console.log("Error Occured at fetchTopics API");
        console.error(error);
        setIsError(true);
    } finally {
        setIsLoading(false);
    }

}