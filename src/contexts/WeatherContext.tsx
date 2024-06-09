import { createContext, useState, useEffect } from "react";

interface WeatherContextType {
  weatherData: WeatherData | null;
}

export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
});

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = () => {
      const apiUrl =
        "http://api.weatherapi.com/v1/forecast.json?key=e4aa1081033a49478a7184007240806&q=Dibulla&days=7&aqi=yes&alerts=yes";

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 60000); // Actualizar cada minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};
