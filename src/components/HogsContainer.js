import React from "react";
import Hog from "./Hog";



export default function HogsContainer( {hogs} ) {

    let hogsToDisplay = hogs.map(hog => {
        return (
            <Hog
            key={hog.name}
            hog={hog} //aqui eu tenho todo o hog objeto(name, specialty, grased, weight, image)
            />)
    })


    return (
        <div>
            {hogsToDisplay}
        </div>
    )
}