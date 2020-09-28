import React, { useState } from 'react';

import { WeatherToday } from './components/weatherToday/WeatherToday';
import { WeatherInfo } from './components/weatherInfo/WeatherInfo';
import {ApiContext} from './ApiContext';

import './styles.css';


function App() {

  const [dataWeather, setDataWeather] = useState({
    "weathers":null,
    "city":null,
    "zone":null,
    "nextWeathers":null
  })

  return (
    <ApiContext.Provider value={{
      dataWeather,
      setDataWeather
    }}>

      <div className="container">
        <WeatherToday />
        <WeatherInfo />
      </div>

    </ApiContext.Provider> 
  );
}

export default App;
