import React, {useState} from 'react';
// import {FullInput} from "./FullInput";
import {Button} from "./Button";
import {ContentInput} from "./ContentInput";

// type MessagePropsType = {
//     message:string
// }

export const Input = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message]);
        setTitle("")
    }



    return (
        <>
            {/*<FullInput addMessage={addMessage}/>*/}
            <ContentInput setTitle={setTitle} title={title}/>
            <Button name={"+"} callback={()=>addMessage(title)}/>
            <div>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

        </>
    );
};

