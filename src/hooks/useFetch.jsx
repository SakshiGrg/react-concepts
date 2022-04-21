import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    /*
    //fetch api 
    const loadData = async (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    };
    */

    //fetch api ASYNC AWAIT
    const loadData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        loadData(url);
    }, [url]);

    return [data];
};

export default useFetch;
