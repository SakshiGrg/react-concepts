import React, {useEffect} from 'react';

const About = (props) => {
    useEffect(() => {
        console.log('About comp Re-renders/Update');
    });
    return <h1>{`${props.link} Component`}</h1>;
};

export default About;
