import React, { useEffect, useState } from 'react'
import './weather.css'
const Weather = () => {

    const [value, setValue] = useState([]);
    const [search, setSearch] = useState("");

const handlesubmit = (e)=>{
    e.preventDefault();
    fetchData();
}


const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=106cc9c159c05930a088771d3669e001`
const fetchData = async ()=>{
    try{
        const response =  await fetch(url);
        const data = await response.json();
        console.log(data);
        setValue(data.main)
    }catch(error){
        console.log(error)
    }
}
useEffect(()=>{
    fetchData();
},[search])


  return (
    <div className='major main'>
      <h1 id='blue'>Weather App</h1>
      <input type="text" className='form-control' onChange={(e)=>setSearch(e.target.value)} placeholder="enter city name" />
        {/* <button className='btn btn-primary my-5' onClick={handlesubmit}>submit</button> */}
<br />
{
    !value?(
        <div id='valid'>Enter valid city name</div> 
    ):(
        <>
        <div className='container'>
        <div><b>Weather Details of City : {search}</b></div>
        <div><b> Current Temperature :  {value.temp}</b> </div>
        <div><b>Maximum Temperature : {value.temp_max}</b></div>
        <div><b>Minimum Temperature : {value.temp_min}</b></div>
        <div><b>Humidity : {value.humidity}</b></div>
        <div><b>Feels Like : {value.feels_like}</b></div>
        </div>
        </>
    )
}

    

    </div>
  )
}

export default Weather
