import React, {useState} from 'react';

type FilterType = "all" | "dollars" | "rubles"

export const Filter = () => {

    const [money, setMoney] = useState([
        {banknote: 'dollars', value: 100, number: ' a1234567890'},
        {banknote: 'dollars', value: 50, number: ' z1234567890'},
        {banknote: 'rubles', value: 100, number: ' w1234567890'},
        {banknote: 'dollars', value: 100, number: ' e1234567890'},
        {banknote: 'dollars', value: 50, number: ' c1234567890'},
        {banknote: 'rubles', value: 100, number: ' r1234567890'},
        {banknote: 'dollars', value: 50, number: ' x1234567890'},
        {banknote: 'rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money

    if (filter === "dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "dollars")
    }

    if (filter === "rubles") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "rubles")
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
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
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("dollars")}>dollars</button>
                <button onClick={() => onClickFilterHandler("rubles")}>rubles</button>
            </div>
        </>
    );
};

