import React from "react";

import SearchCity  from "../../components/SearchCity";
import Cidades from "../../components/Cidades";

import "./Home.css";

const Home = () => {

    return (
        <>        
            <h1 className='homeH1New1'>Previsão do tempo</h1>
            <SearchCity />
            <Cidades />
        </>
      );
}
 
export default Home;
