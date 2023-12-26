import React from 'react'
import './WeatherApp.css'    

import search_icon from '../Assets/search.png'; 
import clear_icon from '../Assets/clear.png'; 
import cloud_icon from '../Assets/cloud.png'; 
import drizzle_icon from '../Assets/drizzle.png'; 
import humidity_icon from '../Assets/humidity.p ng'; 
import rain_icon from '../Assets/rain.png'; 
import snow_icon from '../Assets/snow.png'; 
import wind_icon from '../Assets/wind.png'; 

function WeatherApp() {
  return (
    <div className="container">
        <div className="top-bar"> 
            <input type="text" className="cityInput" placeholder='Search' />
             <div className="search-icon"></div>
        </div>
    </div>
  )
}

export default WeatherApp