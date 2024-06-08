import { HomeIcon, BlendingModeIcon } from "@radix-ui/react-icons";
import WeatherImg from "@/assets/gnome-weather.png";
import { useEffect, useState } from "react";

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      code: string;
    };
    wind_kph: number;
    wind_mph: number;
    wind_dir: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}
interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    maxwind_kph: number;
    avghumidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

function App() {
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
    const interval = setInterval(fetchWeatherData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="">
        <nav className="border flex p-2 gap-2 justify-center items-center">
          <div className="p-1">
            <HomeIcon />
          </div>
          <div>{weatherData?.location.name}</div>
          <div className="mx-1">
            {weatherData ? `${weatherData.current.temp_c}°C` : ""}
          </div>
          <div>
            Lat: {weatherData?.location.lat} Lon:{weatherData?.location.lon}
          </div>
          <div>{weatherData?.location.localtime}</div>
        </nav>
        <div className="container z-0">
          <div className="container flex justify-between gap-2 p-1 ">
            <div className="flex justify-center items-center">
              <div className="p-1">
                <HomeIcon />
              </div>
              <div>
                {weatherData?.location.name}, {weatherData?.location.region}
              </div>
              <select name="select" id="select"></select>
            </div>

            <div className="flex">
              <h2 className="text-3xl font-black">
                <sup>0</sup>C
              </h2>
              <select name="" id=""></select>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:border relative mx-auto w-full md:w-2/4 lg:w-1/3 rounded-md  md:bg-slate-100 lg:bg-slate-100 md:-mt-6 z-20 p-10 ">
            <div className="flex justify-center items-center gap-4">
              <div className="order-2">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl lg:text-7xl font-black h-full p-4">
                    {weatherData?.current.temp_c}
                    <sup className="font-normal">°C</sup>
                  </h1>
                </div>
              </div>
              <div className="w-24 drop-shadow lg:w-28 flex justify-center items-center order-1">
                <img src={WeatherImg} alt="" />
              </div>
            </div>
          </div>
          <div className="relative border rounded-md drop-shadow flex justify-center items-center mx-auto w-2/3 -m-20 py-10 md:py-20 px-4 bg-green-400 z-10 backdrop-blur-sm">
            <div className="">
              <div className="text-2xl my-4 text-center font-bold">
                {weatherData?.current.condition.text}
              </div>
              <div className="text-xl my-4 text-center">
                Sensación Térmica:{" "}
                <span className="font-bold">
                  {weatherData?.current.feelslike_c}
                </span>
              </div>
              <div className="flex">
                <div className="w-1/2 text-center">
                  <p className="font-semibold">
                    {weatherData?.current.wind_kph}
                    <span className="font-thin"> Km/h</span>
                  </p>
                  Viento
                </div>
                <div className="w-1/2 text-center">
                  <p className="font-semibold">
                    {weatherData?.current.humidity}
                    <span className="font-thin">%</span>
                  </p>
                  Viento
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container grid md:grid-flow-col gap-1 border mt-16 mx-auto w-full md:w-5/6 p-4 bg-slate-100/65 relative z-50 shadow-sm md:shadow-md md:rounded-lg">
          {weatherData?.forecast.forecastday.map(
            (day: ForecastDay, index: number) => (
              <div
                key={index}
                className="border rounded-md p-2 grid grid-flow-col md:grid-flow-row"
              >
                <div className="flex justify-center items-center">
                  <h1 className="text-sm md:text-lg font-semibold text-left md:text-center">
                    {new Date(day.date).toLocaleDateString("es-ES", {
                      weekday: "long",
                    })}
                  </h1>
                </div>
                <div className="flex justify-center items-center">
                  <div className="p-1 w-10 lg:w-14 flex justify-center mx-auto">
                    <img
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">{day.day.condition.text}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="">
                    {day.day.maxtemp_c}° - {day.day.mintemp_c}°
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-full lg:w-1/3 text-center text-xs flex justify-center items-center">
                    <div className="p-1">
                      <BlendingModeIcon />
                    </div>
                    {day.day.avghumidity}%
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
