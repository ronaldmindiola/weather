import { createContext, useState, useEffect } from "react";

interface Condition {
  text: string;
  icon: string;
}

interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avghumidity: number;
  condition: Condition;
}

interface ForecastDay {
  date: string;
  day: Day;
}

interface Forecast {
  forecastday: ForecastDay[];
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  forecast: Forecast;
}

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
