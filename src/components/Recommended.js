
import React, { useEffect, useState } from "react";
import './Recommended.css';

const Recommended = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // Fetch current location using IP address
        const fetchLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();
                const location = data.city; // Assuming the city is the required location
                fetchWeatherData(location);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        // Fetch weather data from the weather API
        const fetchWeatherData = async (location) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c54bf3918a2805b5d4c8e4b592e3ee76`);
                const data = await response.json();
                setWeather(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchLocation();
    }, []);

    return (
        <div className="Recommended">
            <h2>Recommended for you</h2>
            {weather && (
                <div>
                    <h3>Weather in {weather.name}</h3>
                </div>
            )}
        </div>
    );
};

export default Recommended;


    