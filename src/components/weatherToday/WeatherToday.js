import React, { useContext, useEffect, useState } from 'react';

import { ApiContext } from '../../ApiContext';
import { WeatherSearch } from '../weatherSearch/WeatherSearch';

// funciones
import {getApiWeather} from '../../functions/getApiWeather';
import {convertDateToday} from '../../functions/convertDates';
// imagenes
import location from '../../images/location.svg';
// styles
import './weatherToday.css'

export const WeatherToday = () => {

    // datos del clima
    const {dataWeather, setDataWeather} = useContext(ApiContext);
    
    // datos de la coordenada - state
    const [localization, setLocalization] = useState('lattlong=0,0')
    
    // geolocalizacion - coordenadas 
    navigator.geolocation.getCurrentPosition(position => {
        // guardo las coordenadas
        setLocalization(`lattlong=${position.coords.latitude},${position.coords.longitude}`);
    });
    
    // funcion - cuando hago click en el icono geolocalizacion
    const handleLocation = async() =>{
        // obtener datos de la api
        const getWeathers = await getApiWeather(localization)
        // obtengo los datos que quiero aplicando destructuring
        const {consolidated_weather,title,timezone} = getWeathers;
        // guardo los datos
        setDataWeather({
            "weathers":consolidated_weather[0],
            "city":title,
            "zone":timezone,
            "nextWeathers":consolidated_weather.slice(1)
        });
    }
    
    useEffect(() => {
        handleLocation()
    }, [])


    const {weathers, city, zone} = dataWeather;

    return (
        <div className="weatherToday">

            {/* div de boton header */}
            <div className="weatherToday-buttons">

                {/* boton buscador */}
                <button 
                    className="weatherToday-button-search"
                    onClick={()=>{document.querySelector('.weatherSearch').style.width="100%"}}
                >
                    Search for places
                </button>

                {/* boton geolocalizacion */}
                <div 
                    className="weatherToday-button-ubication"
                    onClick={handleLocation}
                >
                    <img src={location} alt=""/>
                </div>
            </div>

            {/* informacion del clima de hoy */}
            <div className="weatherToday-info">
                
                <img 
                    src={weathers && `https://www.metaweather.com/static/img/weather/${weathers.weather_state_abbr}.svg`} 
                    alt="wheaterIcon"
                />

                <div className="weatherToday-info-temperature">
                    <h1>{weathers && Math.floor(weathers.the_temp)}</h1>
                    <span>°C</span>
                </div>

                <h2>{city}</h2>

                <div>
                    <p>Today - {weathers && convertDateToday(weathers.applicable_date)}</p>
                    <span>{zone}</span>
                </div>
            </div>

            {/* caja - buscador */}
            {<WeatherSearch/>}

        </div>
    )
}
