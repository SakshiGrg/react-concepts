import React, {createRef, useEffect, useRef, useState} from 'react';

const Overview = ({compname}) => {
    const [counter, setCounter] = useState(0);
    const createRefVar =
        createRef(); /** does not persists the existing ref value between re-renders */
    const useRefVar = useRef(); /** persists the existing ref value between re-renders */

    useEffect(() => {
        createRefVar.current = 'GeeksforGeeks';
        useRefVar.current = 'GeeksforGeeks';
    }, []);
    useEffect(() => {
        console.log(
            'CreateRef (doesnt persists d existing ref value btw re-renders) -->',
            counter,
            createRefVar.current
        );
        console.log('UseRef (persists d value btw re-renders)-->', counter, useRefVar.current);
    }, [counter]);
    return (
        <>
            <h1>{`${compname} Component`}</h1>
            <h3>Example on UseRef</h3>
            <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
            <h4>Counter Value: {counter}</h4>
        </>
    );
};

export default Overview;
