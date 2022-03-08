import React, {useState} from 'react';

// let a = 1;



export const NewApp = () => {
    let[a, setA]=useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandlerReset = () => {
        setA(a=1)
        console.log(a)
    }
    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerReset}>0</button>
        </>
    );
};
