import React from 'react'
import { FaRegEye } from "@react-icons/all-files/fa/FaRegEye";
import { FaTemperatureHigh } from "@react-icons/all-files/fa/FaTemperatureHigh";
import { FaWind} from "@react-icons/all-files/fa/FaWind";
import { FaWater} from "@react-icons/all-files/fa/FaWater";

export default function Weather({ cityName, iconWeather, cityTime, cityTemprature, visibility, feelsLike ,humidity, wind, description}) {
  return (
    <>

      <div className='bg-[#4e418291] w-[400px] h-[500px] mt-4 rounded-3xl flex justify-center items-center flex-wrap'>
        <img src={iconWeather} alt="" className=' object-cover h-[100px] rounded-lg border-none outline-none' />
        <div className='h-[100px]'>
          <p className='text-white text-4xl ml-5 flex items-center h-[100px]'>{cityName}<span className='text-lg ml-4 h-full flex items-center pt-4'>{cityTime} </span> </p>
        </div>
        <h1 className='h-[100px] text-8xl w-[400px] text-center text-white'>{cityTemprature ? `${cityTemprature}°C` :""} </h1>
        <p className='text-white text-xl flex justify-center w-[400px]'>{description}</p>
        <div className='w-full flex items-center'>
          <p className='w-1/2 flex items-center justify-center text-white text-lg '>
            <FaRegEye className='pr-3 text-3xl' />
            <span className='pr-2'>visibility</span>
            {visibility ? `${visibility}km` :""}</p>
          <p className='w-1/2  flex justify-center items-center text-white text-lg '>
            <FaTemperatureHigh className='pr-3 text-3xl' />
            <span className='pr-2'>feels like</span>
            {feelsLike? `${feelsLike}°C` :""}</p>
        </div>
        <div className='w-full flex items-center'>
          <p className='w-1/2 flex items-center justify-center text-white text-lg '>
            <FaWater className='pr-3 text-3xl' />
            <span className='pr-2'>humidity</span>
            {humidity ? `${humidity}%` :""}</p>
          <p className='w-1/2  flex justify-center items-center text-white text-lg '>
            <FaWind className='pr-3 text-3xl' />
            <span className='pr-2'>wind</span>
            {wind ? `${wind}km/s` :""}</p>
        </div>

      </div>
      <div className='text-3xl text-[#1f1641bf] mt-8'>
            coded by: 
            <a className='text-[#ebe9ef] hover:text-[#0c0123] pl-5' href="https://www.linkedin.com/in/farnaz-darvish/" target="_blank">farnaz darvish- </a>
            <a className='text-[#ebe9ef] hover:text-[#0c0123]' href="https://www.linkedin.com/in/kosar-akbarshah-22102b1b6/" target="_blank">kosar akbarshah- </a>
            <a className='text-[#ebe9ef] hover:text-[#0c0123]' href="https://www.linkedin.com/in/sheyda-rajaee-94159331b" target="_blank">sheyda rajaee.
            </a>
        </div>



    </>
  )
}
