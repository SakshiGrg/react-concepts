import React, {useState, useEffect} from 'react';

const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    //fetch api call
    const loadData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setData(data));
    };

    // async await fetch api
    // const loadData = async () => {
    //     const api = 'https://jsonplaceholder.typicode.com/todos';
    //     const response = await fetch(api);
    //     const data = await response.json();
    //     setData(data);
    //     console.log('getData-->', data);
    // };

    const renderProducts =
        data &&
        data
            .filter(({id}) => id < 10)
            .map((item) => {
                // console.log('Data-->', item);
                return (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                );
            });

    return (
        <div className="products-container">
            <h1>Products</h1>
            {renderProducts}
        </div>
    );
};

export default Products;
