import React, {ChangeEvent} from 'react';

type ContentInputPropsType = {
    setTitle:(title:string)=>void
    title:string
}

export const ContentInput = (props: ContentInputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <>
            <input value={props.title} onChange={onChangeInputHandler} />
        </>
    );
};

