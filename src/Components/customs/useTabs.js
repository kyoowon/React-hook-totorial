import React, {useState} from 'react'

const content = [
    {
        tab : "section 1",
        content : "I'm the content of the section 1"
    },
    {
        tab : "section 2",
        content : "I'm the content of the section 2"
    }
]

const useTabs = (initialTab, allTab) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTab || !Array.isArray(allTab)){
        return
    }
    return {
        currentItem : allTab[currentIndex],
        changeItem : setCurrentIndex
    }
}

export function Example_3() {
    const {currentItem, changeItem} = useTabs(0, content)
    return (
        <div>
            <h1>useTabs</h1>
            {content.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
            <div>
                {currentItem.content}
            </div>
        </div>
    )
}
