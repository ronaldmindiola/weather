import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import WeatherImg from "@/assets/gnome-weather.png";

const Display = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      <div className="relative">
        <div className="lg:border relative mx-auto w-full md:w-2/4 lg:w-1/3 rounded-md  md:bg-slate-100 lg:bg-slate-100 md:-mt-6 z-20 p-10 animate-fade animate-once animate-ease-in-out">
          <div className="flex justify-center items-center gap-4">
            {weatherData ? (
              <div className="order-2">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl lg:text-7xl font-black h-full p-4">
                    {weatherData?.current.temp_c}
                    <sup className="font-normal">°C</sup>
                  </h1>
                </div>
              </div>
            ) : (
              <div className="order-2 ">
                <div className="flex justify-center items-center animate-pulse animate-duration-[2000ms] animate-infinite">
                  <h1 className="text-6xl lg:text-7xl font-black h-full p-4 ">
                    0<sup className="font-normal">°C</sup>
                  </h1>
                </div>
              </div>
            )}
            <div className="w-24 drop-shadow lg:w-28 flex justify-center items-center order-1 animate-wiggle-more animate-infinite animate-duration-[18000ms]">
              <img src={WeatherImg} alt="" />
            </div>
          </div>
        </div>
        <div className="relative border rounded-md drop-shadow flex justify-center items-center mx-auto w-2/3 -m-20 py-10 md:py-20 md:pb-10 px-4 bg-green-400 z-10 backdrop-blur-sm  animate-fade animate-once animate-duration-[2000ms]">
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
    </>
  );
};
export default Display;
