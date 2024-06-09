import { HomeIcon } from "@radix-ui/react-icons";
import { WeatherContext } from "../../contexts/WeatherContext";
import { useContext } from "react";
const Config = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      <div className="container z-0">
        <div className="container flex justify-between gap-2 p-1 ">
          <div className="flex justify-center items-center animate-fade-right animate-duration-[1000ms] animate-delay-[2000ms]">
            <div className="p-1">
              <HomeIcon />
            </div>
            <div>
              {weatherData?.location.name}, {weatherData?.location.region}
            </div>
            <select name="select" id="select"></select>
          </div>

          <div className="flex animate-fade-left animate-duration-[1000ms] animate-delay-[2000ms]">
            <h2 className="text-3xl font-black">
              <sup>0</sup>C
            </h2>
            <select name="" id=""></select>
          </div>
        </div>
      </div>
    </>
  );
};
export default Config;
