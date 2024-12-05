import React, { useEffect, useState } from 'react'
// import { IoSearch } from "react-icons/io5";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Weather from '../weatherInfo/weatherInfo';
export default function SearchBar() {

    const [inputValue, setInputValue] = useState("")
    const [cityWeather, setCityWeather] = useState()



    const searchMyCity = () => {
        fetch(`http://api.weatherstack.com/current?access_key=e2ab6d0528af18974bf5f850b07da68a&query=${inputValue}`)
            .then((res) => {
                // console.log({ res })
                return res.json();
            })
            .then((data) => {
                // console.log({ data: data });
                setCityWeather(data)
            });
    }


    useEffect(() => {
        console.log({ cityWeather })
    }, [cityWeather])

    return (
        <>
            <div>
                <div className='flex  h-[60px] justify-center items-center w-[400px] rounded-3xl bg-[#4e4182]'>
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='search by city or country' className='rounded-3xl py-2 w-[300px] bg-[#4e4182] focus:outline-none text-white text-xl ' />
                    <button onClick={searchMyCity} className=' h-12 text-lg px-7  rounded-3xl flex items-center text-white bg-[#14b8ef]' >
                        <FaSearch />
                    </button>
                </div>
            </div>
            <Weather cityName={cityWeather?.location?.name} iconWeather={cityWeather?.current?.weather_icons[0]} cityTime={cityWeather?.current?.observation_time} cityTemprature={cityWeather?.current?.temperature} visibility={cityWeather?.current?.visibility} feelsLike={cityWeather?.current?.feelslike} humidity={cityWeather?.current?.humidity} wind={cityWeather?.current?.wind_speed} description={cityWeather?.current?.weather_descriptions[0]}/>

        </>
    )
}
