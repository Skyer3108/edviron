import { createContext } from "react"

export const StoreContext=createContext(null) 
const StoreContextProvider=(props)=>{

    const url='https://edviron-backend-r6y5.onrender.com'
    return(
        <StoreContext.Provider value={{url}}>
            {props.children}
        </StoreContext.Provider>
        
    )
}

export default StoreContextProvider
