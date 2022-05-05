import React from 'react';

const Child = ({name}) => {
    console.log('Child Rendered');
    return (
        <>
            <h1>{name} Component</h1>;
        </>
    );
};

export default React.memo(Child);
