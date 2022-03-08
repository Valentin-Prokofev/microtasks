import React from 'react';

type BodyPropsType = {
    titleForBody: string
}

export const Body:React.FC<BodyPropsType> = (props) => {
    return (
        <>
            <h1>{props.titleForBody}</h1>
        </>
    );
};

