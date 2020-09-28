import React, { useContext } from 'react';
import { ApiContext } from '../../ApiContext';

import {convertDateNextDays} from '../../functions/convertDates';

import './weatherInfo.css';

export const WeatherInfo = () => {

    const {dataWeather} = useContext(ApiContext);

    const {weathers, nextWeathers} = dataWeather;

    return (
        <div className="weatherInfo">
            {/* clima de los siguientes dias */}
            <div className="weatherInfo-week-cards">
                { nextWeathers && nextWeathers.map( (nextWeather,index) =>
                    <div className="weatherInfo-week-card" key={index}>
                        <p>{convertDateNextDays(nextWeather.applicable_date)}</p>
                        <img 
                            src={`https://www.metaweather.com/static/img/weather/${nextWeather.weather_state_abbr}.svg`} 
                            alt="wheaterIcon"
                        />
                        <div className="numbers">
                            <span>{Math.floor(nextWeather.max_temp)}°C</span>
                            <span>{Math.floor(nextWeather.min_temp)}°C</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="weatherInfo-today">
                {/* informacion del clima de hoy*/}
                <div className="weatherInfo-today-title">
                    <h3>Today's Hightlights</h3>
                </div>
                <div className="weatherInfo-today-cards">
                    <div className="weatherInfo-today-card">
                        <p>Wind status</p>
                        <div className="weatherInfo-today-especific">
                            <h4>{weathers && Math.floor(weathers.wind_speed)} </h4>
                            <p> mph</p>
                        </div>
                    </div>
                    <div className="weatherInfo-today-card">
                        <p>Humidity</p>
                        <div className="weatherInfo-today-especific">
                            <h4>{weathers && weathers.humidity}</h4>
                            <p>%</p>
                        </div>
                    </div>
                    <div className="weatherInfo-today-card">
                        <p>Visibility</p>
                        <div className="weatherInfo-today-especific">
                            <h4>{weathers && Math.floor(weathers.visibility)}</h4>
                            <p>miles</p>
                        </div>
                    </div>
                    <div className="weatherInfo-today-card">
                        <p>Air Pressure</p>
                        <div className="weatherInfo-today-especific"> 
                            <h4>{weathers && weathers.air_pressure}</h4>
                            <p>mb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
