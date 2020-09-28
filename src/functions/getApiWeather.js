// funcion para obtener el clima

export const getApiWeather = async(localization) =>{
        
    // busco la zona con las coordenadas
    const api = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?${localization}`);
    // transformo a json
    const data = await api.json();
    // accedo a la primera ciudad y tomo el valor del "woeid"
    const {woeid} = data[0];
    // busco la temperatura con el valor del "woeid"
    const weather = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`);
    // transformo a json
    const data2 = await weather.json();

    return data2;
}