import Top2 from "./top2"
import top from "./images/free-delivery-top-strip_1.gif"
import Top3 from "./top3"

export default function Header(){
    return(
        <header>
            <div className="top1">
                <img src={top}/>
            </div>

            <Top2/>

            <Top3/>

        </header>
    )
}