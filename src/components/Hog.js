import React, { useState } from "react";

export default function Hog({ hog }) {

    let [hogShow, setHogShow] = useState(false)

    function handleClickHog() {
        setHogShow(!hogShow) //setHogShow is how I update the useState
    }// para fazer essa funcao aparecer no frontend eu preciso, fazer um itinerary condition, la no div em um por um


    let hogDetails = hogShow ?
    // eu uso react fragment para ficar mais bonito de ler, e nao aparecer um monte de divs
    <React.Fragment > 
       <div>{hog.specialty}</div>
            <div>{hog.greased}</div>
            <div> {hog.weight}</div>
    </React.Fragment>
    :null

    return (
        <div className="card">
            <h2>{hog.name}</h2>
            {/* another way to do the condicionally display element. colocar em uma varible e depois aqui, fica mais bonito */}
            {/* <div>{hogShow ? hog.specialty : null}</div>
            <div>{hogShow ? hog.greased : null}</div>
            <div> {hogShow ? 'weight ' + hog.weight : null}</div> */} 
            {hogDetails}
            <img onClick={handleClickHog}
                src={hog.image}
                alt={hog.name}
            />
        </div>

    );
}