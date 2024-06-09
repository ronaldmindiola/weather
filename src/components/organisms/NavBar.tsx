import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import { HomeIcon } from "@radix-ui/react-icons";
const NavBar = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      <div className="border flex p-2 gap-2 justify-center items-center animate-fade-down animate-once animate-duration-[1000ms] ">
        {weatherData ? (
          <div className="p-1">
            <HomeIcon />
          </div>
        ) : (
          ""
        )}

        <div className="">{weatherData?.location.name}</div>
        <div className="mx-1">
          {weatherData ? `${weatherData.current.temp_c}°C` : ""}
        </div>
        <div className="">
          Lat: {weatherData?.location.lat} Lon:{weatherData?.location.lon}
        </div>
        <div>{weatherData?.location.localtime}</div>
      </div>
    </>
  );
};
export default NavBar;
