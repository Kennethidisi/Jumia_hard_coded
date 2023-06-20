import icon1 from "./icons/supermarket.png"
import icon2 from "./icons/health.png"
import icon3 from "./icons/home.png"
import icon4 from "./icons/appliance.png"
import icon5 from "./icons/phone.png"
import icon6 from "./icons/computing.png"
import icon7 from "./icons/electronics.png"
import icon8 from "./icons/fashion.png"
import icon9 from "./icons/baby.png"
import icon10 from "./icons/game.png"
import icon11 from "./icons/sport.png"
import icon12 from "./icons/others.png"
import { useContext } from "react"
import { menuContext } from "../context"

export default function Nav(){
    const {showMenu} = useContext(menuContext)
    return(
        <section className={showMenu? "navs show_nav" : "navs"}>
            <a><img width={17} src={icon1}/>Supermarket</a>
            <a><img width={17} src={icon2}/>Health & Beauty</a>
            <a><img width={17} src={icon3}/>Home & Office</a>
            <a><img width={17} src={icon4}/>Appliances</a>
            <a><img width={17} src={icon5}/>Phone & Tablets</a>
            <a><img width={17} src={icon6}/>Computing</a>
            <a><img width={17} src={icon7}/>Electronics</a>
            <a><img width={17} src={icon8}/>Fashion</a>
            <a><img width={17} src={icon9}/>Baby Products</a>
            <a><img width={17} src={icon10}/>Gaming</a>
            <a><img width={17} src={icon11}/>Sporting Goods</a>
            <a><img width={17} src={icon12}/>Other Categories</a>

        </section>
    )
}