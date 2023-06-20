import Header from "./header"
import "./style.css"
import Body from "./body"
import { useContext } from "react"
import { menuContext } from "../context"

export default function App(){
    const{showMenu} = useContext(menuContext)
    return(
        <div className={showMenu? "body_container fix_body" : "body_container"}>
            <Header/>
            <Body/>
        </div>
    )
}