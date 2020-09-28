import React, { useContext, useState } from 'react'

import { ApiContext } from '../../ApiContext';
import {getApiWeather} from '../../functions/getApiWeather';

import './weatherSearch.css';

export const WeatherSearch = () => {

    const {setDataWeather} = useContext(ApiContext);

    // valor del ciudad a buscar
    const [inputValue, setInputValue] = useState('')
    // las ciudades
    const [cities, setCities] = useState([])

    // guardar valor de la ciudad del <select>
    const handleSearchLocation = (e) => {setInputValue(e.currentTarget.value)}

    // guardar al clickear en una ciudad
    const handleBoxCities = (city) => {
        setInputValue(city)
    }

    // formulario submit 
    const handleSubmit= async(e) =>{
        // obtener datos de la api
        e.preventDefault();
        try {
            if(inputValue.trim().length > 3){
                const getWeathers = await getApiWeather(`query=${inputValue}`)
                // obtengo los datos que quiero aplicando destructuring
                const {consolidated_weather,title,timezone} = getWeathers;
                // guardo los datos
                setDataWeather({
                    "weathers":consolidated_weather[0],
                    "city":title,
                    "zone":timezone,
                    "nextWeathers":consolidated_weather.slice(1)
                });
                setCities(cit => [inputValue,...cit])
            }   
        } catch (error) {
            console.log(error);    
        }
    }


    return (
        <div className="weatherSearch animate__animated animate__slideInLeft">

            <div className="weatherSearch-close">
                <span onClick={()=>{document.querySelector('.weatherSearch').style.width="0"}}>X</span>
            </div>

            <div className="weatherSearch-header">
                <form onSubmit={handleSubmit}>
                    <select onChange={handleSearchLocation}>
                        <option className="country" value="">Choose a city</option>
                        <option className="country" disabled>*Argentina</option>
                        <option value={"Buenos Aires"}>*Buenos Aires</option>
                        <option className="country" disabled>*USA</option>
                        <option value={"San Francisco"}>San Francisco</option>
                        <option value={"New York"}>New York</option>
                        <option className="country" disabled>*Peru</option>
                        <option value={"Lima"}>Lima</option>
                        <option className="country" disabled>*Brazil</option>
                        <option value={"Brasília"}>Brasília</option>
                        <option value={"Rio de Janeiro"}>Rio de Janeiro</option>
                        <option value={"Salvador"}>Salvador</option>
                        <option value={"São Paulo"}>São Paulo</option>
                    </select>
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>

            <form className="weatherSearch-cities" onSubmit={handleSubmit}>
                {cities && cities.map((city,index) =>
                    <button key={index} onClick={() => handleBoxCities(city)} type="submit">
                        <span>{city}</span>
                    </button>
                )} 
            </form>

        </div>
    )
}
