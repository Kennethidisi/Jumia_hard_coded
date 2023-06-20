import { createContext, useState } from "react";

export const menuContext = createContext();

export default function Context({children}){
    const[showMenu, setShowMenu] = useState(false)
    return(
        <menuContext.Provider value={{showMenu, setShowMenu}}>
            {children}
        </menuContext.Provider>
    )
}