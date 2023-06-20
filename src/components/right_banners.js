import ban2 from "./bannerImages/free-delivery.png"
import ban3 from "./bannerImages/JForce.png"

export default function RightBanners(){
    return(
        <section className="rightBanners">
            <img src={ban2}/>
            <img src={ban3}/>
        </section>
    )
}