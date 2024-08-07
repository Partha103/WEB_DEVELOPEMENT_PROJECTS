import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weather, setWeather] = useState(
        {
            name: "Search for a city",
            country: "respective country",
            temp: "",
            humidity: "",
            pressure: "",
            weather: "",
        }
    );

    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>My Weather App</h2>
            <SearchBox updateInfo={ updateInfo }/>
            <br />
            <InfoBox info={ weather }/>
        </div>
    )
}


