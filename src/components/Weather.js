import React from 'react';
import '../assets/WeatherStyles.css'

export default function Weather(props) {
    const {data, location, setLocation, fetchWeather} = props

  return (
    <div className='weather-container'>
        <div className='search'>
            <input
            className='searchInput'
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={fetchWeather}
            placeholder='Press Enter To Search'
            type='text'
            ></input>
        </div>
        <div className='top-container'>
            <div className='top'>
                <div className='location'>
                    {data ? <p>{data.name},</p>: <p className='location-pre'>Enter a city EG: Melbourne</p>} {data ? <p className='location-p'>{data.sys.country}</p> : null}
                </div>
                <div className='temp-cont'>
                {data ? <h1 className='weather-h1'>{Math.floor(data.main.temp)}°C</h1> : null} 
                </div>
                <div className='description'>
                    <p>Forecast</p>
                    {data ?  <p>{data.weather[0].main}</p> : null}
                </div>
            </div>
            <div className='bottom'>
                <div className='feels'>
                    <p>Feels Like</p>
                   {data ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
                </div>
                <div className='humidity'>
                   <p>Humidity</p>
                   {data ? <p>{data.main.humidity.toFixed()}%</p> : null}   
                </div>
                <div className='wind'>
                    <p>Wind Speed</p>
                    {data ? <p>{data.wind.speed.toFixed()} Kmph</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}
