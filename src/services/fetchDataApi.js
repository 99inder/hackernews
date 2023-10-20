import { APIs } from "./APIs";

export const fetchTopics = async (query, setResults, setIsLoading, setIsError) => {

    setIsLoading(true);

    try {
        let response = await fetch(`${APIs.fetchTopicsApi}${query}`);
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
        let response = await fetch(`${APIs.fetchPostDataApi}${id}`);
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