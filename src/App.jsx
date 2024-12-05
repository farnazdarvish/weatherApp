import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/searchbar/searchBar'
import Weather from './components/weatherInfo/weatherInfo'


function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      <div className="bg-[url('../public/bg.jpg')] bg-no-repeat bg-cover bg-center flex-col flex justify-center items-center h-svh ">
        <SearchBar />
      </div>
    </>
  )
}

export default App
