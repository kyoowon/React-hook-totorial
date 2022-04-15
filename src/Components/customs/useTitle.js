import React, {useEffect, useState} from 'react'

const useTitle = initialTitle => {
	const [title, setTitle] = useState(initialTitle)
	const updateTitle = () => {
		const htmlTitle = document.querySelector('title')
		htmlTitle.innerText = title
	}
	useEffect(updateTitle, [title])
	return setTitle;
}

export function Example_5() {
	const titleUpdater = useTitle("loading...")
	setTimeout(() => titleUpdater("Home"), 5000)
	return (
		<div>
			<h1>useTitle</h1>
			<button onClick={() => {
				titleUpdater("loading...")
				setTimeout(() => titleUpdater("Home"), 5000)}
				}>title👆</button>
		</div>
	)
}