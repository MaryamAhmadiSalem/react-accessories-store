import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

const Poster=()=>{
    let [ currentPic , setCurrentPic ] = useState<number>(0)
    let listPic : string[] = [
        'src/assets/pic1.png' ,
        'src/assets/pic2.png' ,
        'src/assets/pic3.png'
    ]
    const previousButton = ()=>{
        if(currentPic > 0)
            setCurrentPic(currentPic - 1)
    }
    const nextButton = ()=>{
        if(currentPic < listPic.length - 1)
            setCurrentPic(currentPic + 1)
    }
    return(
        <div className="poster" style={{backgroundImage : `url(${listPic[currentPic]})`}}>
            <ChevronLeft onClick={previousButton} size={40} strokeWidth={1.5} className="moveIcon"/>
            <ChevronRight onClick={nextButton} size={40} strokeWidth={1.5} className="moveIcon"/>
        </div>
    )
}
export default Poster ;