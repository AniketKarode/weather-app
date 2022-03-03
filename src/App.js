import { useState } from "react";
import axios from 'axios';
import "./App.css";

export default function App() {
  const[city,setCity]= useState("");
  const[weatherData,setweatherData]= useState({

    description: "",
    temp: 0 ,
    temp_min:0,
    temp_max:0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
    name:""

  }) 

  const[loadData,setloadData]= useState(false);

  const searchWeather =()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=f2d5d3cf7aa9f23fb2f0910ad31bfa42`).then((response)=>{

      console.log(response.data);
      setweatherData({description: response.data.weather[0].description, temp: response.data.main.temp, temp_min: response.data.main.temp_min, temp_max: response.data.main.temp_max, humidity: response.data.main.humidity, sunrise: response.data.sys.sunrise,sunset: response.data.sys.sunset, country: response.data.sys.country, name: response.data.name })
    });
    setloadData(true);

  };
 
  return (
    <div className="App">
    
      <h1>Current Weather</h1>
      <div className="inputs">
      <input type="text" onChange={(e)=>{
        setCity(e.target.value);
        console.log(e.target.value);
      }} />
      <button onClick={searchWeather}> Search </button>
      </div>
     
     
      <div className="displayDataContainer">

      { loadData  &&(
        <div className="Data">
        <h3> Description: {weatherData.description}</h3>
        <h3> Temp: {weatherData.temp} </h3>
         <h3>Minimum Temperature: {weatherData.temp_min} </h3>
         <h3>Maximum Temperature: {weatherData.temp_max} </h3>
          <h3> Humidity: {weatherData.humidity} </h3>
         <h3> Sunrise: {weatherData.sunrise} </h3>
          <h3> Sunset: {weatherData.sunset} </h3>
        <h3>  Country: {weatherData.country} </h3>
        <h3> City: {weatherData.name} </h3>
       </div>
       ) }
       
        </div>
    </div>
  );
}

