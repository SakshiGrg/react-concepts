import React from 'react';
import useFetch from '../../hooks/useFetch';

const CustomHook = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');

    const renderProducts =
        data &&
        data
            .filter(({id}) => id < 10)
            .map((item) => {
                // console.log('Data-->', item);
                return (
                    <div key={item.id}>
                        <p>
                            <i>{item.body}</i>
                        </p>
                    </div>
                );
            });

    return (
        <div className="products-container">
            {data && <h1>Products - Custom Hook</h1>}
            {renderProducts}
        </div>
    );
};

export default CustomHook;
