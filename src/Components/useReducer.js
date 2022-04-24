import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
// useReducer는 현재 상태를 업데이트를 위해 필요한 정보를 담는 액션 값을 전달 받아
// 세로운 상태를 변환하는 함수를 의미합니다.

export function Example_11() {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    return (
        <div>
        <h1>useReducer</h1>
        <p>
          현재 카운터 값은 <b>{state.value}</b> 입니다.
        </p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      </div>
    )
}
