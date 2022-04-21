import React, {useEffect} from 'react';
import useFetch from '../../hooks/useFetch';

const CustomHook = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    useEffect(() => {
        console.log('Products comp Re-renders/Update');
    });

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

export default CustomHook;
