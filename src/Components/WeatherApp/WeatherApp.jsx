import React from 'react';
import './WeatherApp.css';    

import search_icon from '../Assets/search.png'; 
import clear_icon from '../Assets/clear.png'; 
import cloud_icon from '../Assets/cloud.png'; 
import drizzle_icon from '../Assets/drizzle.png'; 
import humidity_icon from '../Assets/humidity.png'; 
import rain_icon from '../Assets/rain.png'; 
import snow_icon from '../Assets/snow.png'; 
import wind_icon from '../Assets/wind.png'; 
import { isCompositeComponentWithType } from 'react-dom/test-utils';

function WeatherApp() {

  const api_key = 'f53bebc260bea8433c92cc7e877ff629';
  const search = () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value===""){
      return 0;
    } 
  }

  return (
    <div className="container">
        <div className="top-bar"> 
            <input type="text" className="cityInput" placeholder='Search' />
              <div className="search-icon" onClick={()=>{search()}}>
                  <img src={search_icon} alt="Search " />
              </div>
        </div>

    <div className="weather-image">
      <img src={cloud_icon} alt="Clouds " />
    </div>

    <div className="weather-temp">24℃</div>
    <div className="weather-location">London</div>

    <div className="data-container">

      <div className="element">
        <img src={humidity_icon} alt="Wind" className="icon" />
        <div className="data">
          <div className="humidity-percentage">64%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
      <div className="element">
        <img src={wind_icon} alt="Wind" className="icon" />
        <div className="data">
          <div className="wind-speed">18km/h</div>
          <div className="text">Wind Speed</div>
        </div>
      </div>

    </div>

    </div>
  )
}

export default WeatherApp