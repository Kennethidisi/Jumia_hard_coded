import { useEffect, useRef, useState } from "react"
import ban1 from "./bannerImages/Artboard_1_copy.png"
import ban2 from "./bannerImages/banner1.jpg"
import ban3 from "./bannerImages/ban3.png"
import ban4 from "./bannerImages/ban4.jpg"
import ban5 from "./bannerImages/ban5.jpg"
import ban6 from "./bannerImages/ban6.png"

export default function Banner(){

    const imgs = [ban1, ban2, ban3, ban4, ban5, ban6]
    
    const[counter, setCounter]= useState(0)

    useEffect(()=>{
       const interval = setInterval(()=>{
            setCounter(counter+ 1)
        },5000)

        return(()=>{
            clearInterval(interval)
        })
    },[counter])

    if(counter === imgs.length){
        setCounter(0)
    }

    

    return(
        <section className="banner">
            <img src={imgs[counter]} />
        </section>
    )
}