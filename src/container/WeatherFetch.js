import React, { useState } from 'react'
import Weather from '../components/Weather'

export default function WeatherFetch() {
    const [data , setData] = useState('');
    const [location , setLocation] = useState(''); 


    const fetchWeather = (event) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1e935b3ea44795c03bbd99756850caed`
        if (event.key === "Enter"){
            fetch(url)
            .then(r => r.json())
            .then(d => {
                setData(d)
                setLocation('')
            })
        }
    }


  return (
    <div>
        <Weather
        location={location}
        setLocation={setLocation}
        fetchWeather={fetchWeather}
        data={data}/>
    </div>
  )
}
