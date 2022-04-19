import React from 'react'

const usePreventLeave = () => {

    const listener = event => {
        event.preventDefault();
        event.returnValue = "";
    }

    const enablePrevet = () => window.addEventListener("beforeunload", listener)
    const disablePrevet = () => window.removeEventListener("beforeunload", listener)
    return { enablePrevet, disablePrevet}
}

export function Example_9() {
    const {enablePrevet, disablePrevet} = usePreventLeave();
    return (
        <div>
            <h1>PreventLeave</h1>
            <button onClick={enablePrevet}>Protect</button>
            <button onClick={disablePrevet}>Unprotect</button>
        </div>
    )
}
