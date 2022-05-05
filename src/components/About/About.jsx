import React, {useState, useMemo} from 'react';
import Child from './Child';

const About = (props) => {
    const [number, setNumber] = useState(0);
    //using UseMemo to stop re-rendering of COMPONENT
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number]);
    const [count, setCount] = useState(0);
    console.log('Parent rendered');
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };
    return (
        <>
            <h1>{`${props.link} Component`}</h1>
            <button onClick={() => setCount((c) => c + 1)}>counter++</button>
            <p>Counter: {count}</p>
            <br />
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            ></input>
            <div>OUTPUT: {squaredNum}</div>
            {/* child component */}
            <Child name="ABCD" />
        </>
    );
};

// function to square the value
const squareNum = (number) => {
    console.log('Squaring will be done!-->', Math.pow(number, 2));
    return Math.pow(number, 2);
};

export default About;
