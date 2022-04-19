import React, {useEffect} from 'react'

const useBeforeLeave = (onBefore) => {
    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle)
        return () => document.removeEventListener("mouseleave", handle)
    }, []);
}

export function Example_10() {
    const begForLife = () => console.log("Pls  dont leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <h1>useBeforeLeave</h1>
        </div>
    )
}
