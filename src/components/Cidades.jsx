import React, {useState,useEffect} from "react";

import "./Cidades.css";


const Cidades = () => {
     
    //cidades impressas na pagina inicial
     const cities = [
        {cidade: 'Rio de Janeiro', uf: 'RJ', codigo: '5959'},
        {cidade: 'São Paulo', uf: 'SP', codigo: '3477'},
        {cidade: 'Belo Horizonte', uf: 'MG', codigo: '6879' },
        {cidade: 'Brasilia', uf: 'DF', codigo: '8173'},
        {cidade: 'Belém', uf: 'Para', codigo: '7704'},
        {cidade: 'Salvador', uf: 'BA', codigo: '7564'},
        {cidade: 'Curitiba', uf: 'PR', codigo: '6731'},
        {cidade: 'Fortaleza', uf: 'CE', codigo: '8050'},
        {cidade: 'Manaus', uf: 'AM', codigo: '7544'},
        {cidade: 'João Pessoa', uf: 'PB', codigo: '7364'}
    ];

    const [previsoes,setPrevisoes] = useState([]);

    // Nossa chave
    const chave = "357cd2ecb06444f98de162253230202";

    const fetchWeather = async (city) => {
       let fetchDados = await fetch("https://api.weatherapi.com/v1/forecast.json?key=" + chave + "&q=" + city.cidade + "&days=1&aqi=no&alerts=no");
       fetchDados = await fetchDados.json();
       return fetchDados;
   };
         
   const fetchWeatherData = async () => {
       const requests = cities.map((city) => {
           return fetchWeather(city)
               .then((weather) => weather)
       })
       return Promise.all(requests)
   }

   useEffect(() => {
       fetchWeatherData()
       .then(a => {
           setPrevisoes(a.map(data => {
               return{
                   cidade:data.location.name,
                   temperatura:data.current.temp_c,
                   min:data.forecast.forecastday[0].day.mintemp_c,
                   max:data.forecast.forecastday[0].day.maxtemp_c
               }
           }));
           
           })
   }, )
    
// const [dadosSearch, setDadosSearch] = useState('');

// const handleSearchCity = (e) => {
//     setDadosSearch(e.target.value);
//     console.log({dadosSearch});
// };

const lista1 = previsoes.slice(0,5);
const lista2 = previsoes.slice(5,10);

return (
    <div className="cityContainer">
        {/* <input
            type='search'
            id="usr"
            onChange={handleSearchCity}
            value={dadosSearch}
            className='Input-new1'
            placeholder='Insira aqui o nome da cidade' 
         /> */}

         <hr className="linhaHR" />

        <h2 className="capitaisH2">
            Capitais
        </h2>
        <div className="linhaCabec">
            <div className="firstCabec1">Min.</div>
            <div className="firstCabec2">Máx.</div>
            <div className="secondCabec1">Min.</div>
            <div className="secondCabec2">Máx.</div>
        </div>
        <div className="masterFlexCity">
            <div className="firstFlexCity" >
                
                {lista1.map((item, i) => {
                        return (
                            <div  className="firstDiv" key={i}>
                                 <div className="firstDivOne">{parseInt(`${item.min}`)}॰</div>
                                 <div className="firstDivTwo">{parseInt(`${item.max}`)}॰</div>
                                 <div className="firstDivThree">{item.cidade}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="secondFlexCity">
                {lista2.map((item, i) => {
                        return (
                            <div className="secondtDiv" key={i}>
                                <div className="secondtDivOne">{parseInt(`${item.min}`)}॰</div>
                                <div className="secondtDivTwo">{parseInt(`${item.max}`)}॰</div>
                                <div className="secondtDivThree">{(`${item.cidade}`).replace("Pessoa","João Pessoa")}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
}
 
export default Cidades;
    