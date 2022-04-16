import React from 'react'

const useConfirm = (message = "", callback, rejection) => {
    if(typeof callback != 'function') {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            callback()
        } else {
            try {
                rejection()
            } catch {
                return
            }
        }
    }
    return confirmAction
}

export function Example_8() {
    const deleteWorld = () => console.log("Deleting the world")
    const abort = () => console.log("aborted")
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
    return (
        <div>
             <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}
