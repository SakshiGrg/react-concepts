import React, {useEffect} from 'react';

const Products = (props) => {
    useEffect(() => {
        console.log('Products comp Re-renders/Update');
    });
    return <h1>Products</h1>;
};

export default Products;
