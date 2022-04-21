import React, {useState, useEffect} from 'react';

const Products = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('Products comp Re-renders/Update');
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

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
