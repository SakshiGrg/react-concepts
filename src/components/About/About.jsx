import React, {useState} from 'react';
import Child from './Child';

const About = (props) => {
    const [count, setCount] = useState(0);
    console.log('Parent rendered');
    return (
        <>
            <h1>{`${props.link} Component`}</h1>
            <button onClick={() => setCount((c) => c + 1)}>Increase</button>
            <p>Count: {count}</p>
            {/* child component */}
            <Child name="ABCD" />
        </>
    );
};

export default About;
