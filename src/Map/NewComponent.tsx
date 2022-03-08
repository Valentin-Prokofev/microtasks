import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentType>
    //students:StudentType[] так тоже можно протипизировать
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent: React.FC<NewComponentPropsType> = (props) => {
    return (
        <>
            <ul>
                {props.students.map((objectFromStudentsArray, index) => {
                    return (
                        <li key={objectFromStudentsArray.id}>
                            <span>{objectFromStudentsArray.name}</span>
                            <span> age: {objectFromStudentsArray.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

