import React, { useState } from 'react'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target : { value }
    } = event;

    let wellupdate = true;
    if (typeof validator == 'function'){
      wellupdate = validator(value)
    }
    if (wellupdate) {
      setValue(value)
    }
  }
  return { value, onChange}
}

// fuctional Component
export function Example_2() {
  const maxLen = value => value.length <= 10;
  const includes = value => value.includes('@');
  const name = useInput("Mr .", maxLen);
  const email = useInput("@", includes);
  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="name" {...name}/>
      <input placeholder="email" {...email}/>
    </div>
  )
}
