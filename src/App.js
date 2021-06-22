import React, {useState} from 'react';
import "./styles.css";

import {Footer} from "./components/footer";
import {Header} from "./components/header";
import {Main} from "./components/main";
import {Weather} from "./components/weather";


export default function App() {

  //можно через один юзСтейт - для объекта.
  const[icon, setIcon] = useState('');
  const[country, setCountry] = useState('');
  const[city, setCity] = useState('');
  const[localtime, setLocaltime] = useState('');
  const[timezone, setTimezone] = useState('');
  const[temprature, setTemprature] = useState('');
  const[visibility, setVisibility] = useState('');
  const[winddirection, setWinddirection] = useState('');
  const[windspeed, setWindspeed] = useState('');

  const getWeather = async (event) => {
    event.preventDefault();
    const api_key = 'c8a3f6612be246c091d90050211102';
    const api_city = event.target.elements.city.value;
    if (api_city.trim() === '') {
      alert ('City not indicated');
    } else  {
      let api_data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${api_city}&aqi=no`
      );
      if (api_data.status === 400) {
        alert ('City does not exist');
      } else {
        let api_json = await api_data.json();
        console.log(api_json);
        setIcon(api_json.current.condition.icon);
        setCountry(api_json.location.country);
        setCity(api_json.location.name);
        setLocaltime(api_json.location.localtime);
        setTimezone(api_json.location.tz_id);
        setTemprature(api_json.current.temp_c);
        setVisibility(api_json.current.vis_km);
        setWinddirection(api_json.current.wind_dir);
        setWindspeed(api_json.current.wind_kph);
      }
    }
  }

  return (
    <div className="App">      
      <Header/>
      <Main getWeatherMethod={getWeather}/>
      <Weather
        icon={icon}
        country={country}
        city={city}
        localtime={localtime}
        timezone={timezone}
        tempreture = {temprature}
        visiblity ={visibility}
        winddirection={winddirection}
        windspeed ={windspeed}
      />
      <Footer/>
    </div>
  );
}
