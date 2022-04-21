import React, {useEffect} from 'react';

const Overview = ({compname}) => {
    useEffect(() => {
        // console.log('Overview comp Re-renders/Update');
    });
    return <h1>{`${compname} Component`}</h1>;
};

export default Overview;
