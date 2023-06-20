import star from "./images/star.png"
import help from "./images/help.png"
import cart from "./images/cart.png"
import user from "./images/user.png"
import search from "./images/search.png"
import menu from "./icons/menu_icon.png"
import close_btn from "./icons/close.png"
import { useContext } from "react"
import { menuContext } from "../context"

export default function Top3(){
    const{showMenu, setShowMenu} = useContext(menuContext)
    console.log(showMenu)
    function handleShow(){
        setShowMenu(!showMenu)
    }
    return(
        <div className="top3">
            <img src={showMenu? close_btn : menu} alt="menu" width={25} className="menu_btn" onClick={handleShow}/>

                <span className="logo">
                    JUMIA
                    <small className="yellow3">
                       <img src={star} width={16}/>
                    </small>
                </span>

                <div className=" top3_div">
                    <img src={search} width={22} className="search"/>
                    <input type="text" placeholder="Search products, brands and categories"/>
                    <button>SEARCH</button>
                </div>

                <div className="linkDiv">
                    <a>
                        <img src={user} width={25}/>
                        <span>Account</span>
                    </a>

                    <a className="help_anchor">
                        <img src={help} width={25}/>
                        <span>Help</span>
                    </a>

                    <a>
                        <img src={cart} width={25}/>
                        <span>Cart</span>
                    </a>

                </div>
        </div>
    )
}