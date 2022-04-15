import React, { useRef } from 'react'

export function Example_6() {
  const refInput = useRef()
  return (
    <div>
      <h1>useRef</h1>
      <input ref={refInput} placeholder="input"></input>
      <button onClick={
        () => setTimeout(() =>
          console.log(refInput.current.focus()), 5000)}>
        click
            </button>
    </div>
  )
}
