import React, { useRef, useEffect } from 'react'

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
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
