import React from 'react';
import {FilterType} from "../Filter/Filter";

type MoneyType = {
    banknote: string
    value: number
    number: string
}

type FilterTaskPropsType = {
    money: Array<MoneyType>
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const FilterTask: React.FC<FilterTaskPropsType> = (props) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("dollars")}>dollars</button>
                <button onClick={() => props.onClickFilterHandler("rubles")}>rubles</button>
            </div>
        </>
    );
};

