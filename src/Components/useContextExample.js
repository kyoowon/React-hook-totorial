import react, { createContext } from 'react'
import { Children } from './useContext';

export const AppContext = createContext();

export const Example_12 = () => {
    const User = {
        name : "kyulee",
        age : "28"
    };
    return (
        <AppContext.Provider value={User}>
            <div>
                <h1>useContext</h1>
                <Children />
            </div>
        </AppContext.Provider>
    )
}