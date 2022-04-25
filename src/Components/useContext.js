import react from 'react'
import { AppContext } from './useContextExample'


export const Children = () => {
    return (
        <AppContext.Consumer>
            {(user) => (
            <>
                <h3>AppContext에 name은 {user.name}입니다.</h3>
                <h3>AppContext에 age은 {user.age}입니다.</h3>
            </>
            )}
        </AppContext.Consumer>
    )
}