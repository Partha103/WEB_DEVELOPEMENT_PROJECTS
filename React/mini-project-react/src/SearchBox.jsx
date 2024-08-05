import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox() {
    let [city, setCity] = useState('');

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7418b7558d8bed8239b9ab622bffaf10";

    let getWeatherInfo = async() => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let data = await response.json();
       console.log(data);
       let result = {
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].main,
        name: data.name,
        country: data.sys.country,
       }
       console.log(result);
    }

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        setCity('');
        getWeatherInfo();
    }
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}