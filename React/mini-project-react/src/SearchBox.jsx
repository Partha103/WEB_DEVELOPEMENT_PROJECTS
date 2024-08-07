import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import PropTypes from 'prop-types';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState('');

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7418b7558d8bed8239b9ab622bffaf10";

    let getWeatherInfo = async() => {
        try{
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
            return result;
        }catch(err){
            setError("Sorry, we couldn't find the city you were looking for. Please try again.");
        }  
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    }

    let handleSubmit = async(e) => {
        e.preventDefault();
        console.log(city);
        setCity('');
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    return (
        <div className='SearchBox'>
            <h3>Search for the weather</h3>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}

SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
};