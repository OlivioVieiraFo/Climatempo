import React, { useState } from "react";
import "./SearchCity.css";

const SearchCity = () => {

    const [dadosSearch, setDadosSearch] = useState('');

    const handleSearchCity = (e) => {
        setDadosSearch(e.target.value);
        console.log({dadosSearch});
    };
    
    return (
        <div className="searchCityContainer">
            <input
                type='search'
                id="usr"
                onChange={handleSearchCity}
                value={dadosSearch}
                className='Input-new1'
                placeholder='Insira aqui o nome da cidade' 
             />

        </div>
      );
}
 
export default SearchCity;
