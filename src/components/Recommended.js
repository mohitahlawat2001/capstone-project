
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

    const recommendation = () => {
        if (weather) {
            // const temp = weather.main.temp - 273.15; // Convert temperature from Kelvin to Celsius
            console.log(weather.weather[0].main);
            const currentWeather = weather.weather[0].main;
            if (currentWeather === "Clear") {
                return "It's a sunny day! you should buy sunscreen and sunglasses. ";
            } else if (currentWeather === "Clouds" || currentWeather === "Mist" || currentWeather === "Fog"|| currentWeather === "Haze" || currentWeather === "Smoke" || currentWeather === "Dust" || currentWeather === "Sand" || currentWeather === "Ash" || currentWeather === "Squall" || currentWeather === "Tornado") {
                return `It's a ${currentWeather } day! you should buy a stackup pin and drink a hot coffee.`;
            } else if (currentWeather === "Rain" || currentWeather === "Drizzle" || currentWeather === "Thunderstorm") {
                return `It's a ${currentWeather} day! you should buy an umbrella and a raincoat.`;
            } else if (currentWeather === "Snow") {
                return "It's a snowy day! you should buy a hoodie.";
            } else {
                return "It's a normal day! you should buy a t-shirt.";
            }
        }
    };
    
    return (
        <div className="Recommended banner">
            <h2>Recommended for stackies by a stackies</h2>
            {weather && (
                <div>
                    {/* <h3>Weather in {weather.name}</h3> */}
                    <p>{recommendation()}</p>
                </div>
            )}
        </div>
    );
};

export default Recommended;


    