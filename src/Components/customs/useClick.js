import React, { useRef, useEffect } from 'react'

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    // so, It will only work when it is componenetDidMount. It work once.
    if (element.current) {
      element.current.addEventListener("click", onClick)
    }
    // It whil only work when it is compoenentDidUnmount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
    // add dependency
  }, [])
  return typeof onClick !== "function" ? element : undefined;
}

export function Example_7() {
  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>useClick</h1>
    </div>
  )
}
