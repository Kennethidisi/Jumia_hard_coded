import star from "./images/star.png"
import food from "./images/food.png"
import party from "./images/party.png"
import logic from "./images/logistic.png"

export default function Top2(){
    return(
        <div className="top2">
            <span className="top2_logo">
                <small className="yellow1">
                    <img src={star} width={12}/>
                </small>
                Sell on Jumia
            </span>

            <div className="top2_div">
                <span>
                    JUMIA
                    <small className="yellow2">
                       <img src={star} width={8}/>
                    </small>
                </span>

                <a>
                    <img src={party} width={15}/>
                    PAY
                </a>

                <a>
                    <img src={food} width={15}/>
                    FOOD
                </a>

                <a>
                    <img src={party} width={15}/>
                    PARTY
                </a>

                <a>
                    <img src={logic} width={15}/>
                    LOGISTICS
                </a>
            </div>
        </div>
    )
}