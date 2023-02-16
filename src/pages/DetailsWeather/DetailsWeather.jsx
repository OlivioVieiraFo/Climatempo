import React from "react";
// import React, { useState } from "react";

import Cidades from "../../components/Cidades";
import SearchCity from "../../components/SearchCity";

import "./DetailsWeather.css";

const DetailsWeather = () =>{

    //const [tempo, setTempo] = useState([]);

        // setTempo = console.log("verão")

    return(
        <>
            <h1 className='homeH1New2'>Previsão do tempo</h1>
            <div className="detailsWeatherContainer">
                <div className="boxDetailsWeather">
                    {/* <p>oi,+{tempo}</p>                  */}
                </div>
            </div>
            <SearchCity />
            <Cidades />
        </>
    )

}

export default DetailsWeather;