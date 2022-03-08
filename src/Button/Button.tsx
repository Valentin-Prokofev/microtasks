import React from 'react';

type ButtonPropsType = {
    name: string
    callBack:()=>void
}

export const Button:React.FC<ButtonPropsType> = (props) => {

    const oneClickHandler = () => {
        props.callBack()
    }


    return (
        <>
            <button onClick={oneClickHandler}>{props.name}</button>
        </>
    );
};

