import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Map/NewComponent";
import {NewComponentTask} from "./Map/NewComponentTask";
import {Button} from "./Button/Button";





const App = () => {

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("i am a stupid button")
    }

    return (
        <div className={"App"}>
            <Button name="MyYouTubeChannel-1" callBack={() => Button1Foo("I am Vasya", 21, "live in Minsk")}/>
            <Button name="MyYouTubeChannel-2" callBack={() => Button2Foo("I am Ivan")}/>
            <Button name="Stupid button" callBack={Button3Foo}/>
        </div>
    );
}
{/*//     <button onClick={(event)=>onClickHandler("Vasya")}>MyYouTubeChannel-1</button>*/
}
{/*//     <button onClick={(event)=>onClickHandler("Ivan")}>MyYouTubeChannel-2</button>*/
}
{/*<Header title = "New header"/>*/
}
{/*<Body titleForBody = "New body"/>*/
}
{/*<Footer/>*/
}
{/*<NewComponent students = {students}/>*/
}
{/*<NewComponentTask cars={topCars}/>*/
}
{/*<Button/>*/
}
{/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-1</button>*/
}


// const myFirstSubscriber = () => {
//     console.log("Hello i am Vasya!")
// }
// const mySecondSubscriber = () => {
//     console.log("Hello i am Ivan!")
// }

// const onClickHandler = (name:string) => {
//         console.log(name)
// }

// const students = [                            NewComponent
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
// ]

// const topCars = [                              NewComponentTask
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'},
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]

export default App;
