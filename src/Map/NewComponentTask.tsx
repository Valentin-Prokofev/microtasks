import React from 'react';

type NewComponentTaskPropsType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const NewComponentTask: React.FC<NewComponentTaskPropsType> = (props) => {
    return (
        <>
            <table>
                {props.cars.map((objectFromCarsArray, index) => {
                    return (
                        <>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{objectFromCarsArray.manufacturer}</th>
                                <th>{objectFromCarsArray.model}</th>
                            </tr>
                            {/*<tr>*/}
                            {/*    <td>1</td>*/}
                            {/*    <td>bmw</td>*/}
                            {/*    <td>5</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <td>2</td>*/}
                            {/*    <td>mercedes</td>*/}
                            {/*    <td>6</td>*/}
                            {/*</tr>*/}
                            {/*<tr>*/}
                            {/*    <td>3</td>*/}
                            {/*    <td>audi</td>*/}
                            {/*    <td>7</td>*/}
                            {/*</tr>*/}
                        </>
                    )
                })}
            </table>
        </>
    );
};

