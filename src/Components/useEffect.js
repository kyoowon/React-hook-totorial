import React, { useState, useEffect } from 'react'

export function Example_4() {
    const seyHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [anumber, setAnumber] = useState(0);
    // []안에 number, anumber 등을 넣어 해당 값이 변경될 때 마다 이벤트가 발생하도록 하는 메서드
    useEffect(seyHello, [number])
    return (
        <div>
            <h1>useEffect</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
        </div>
    )
}