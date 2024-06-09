import { WeatherContext } from "@/contexts/WeatherContext";
import { BlendingModeIcon } from "@radix-ui/react-icons";
import { useContext } from "react";

const Forecast = () => {
  const { weatherData } = useContext(WeatherContext);
  return (
    <>
      <div className="">
        <div className="container grid md:grid-flow-col gap-1 border mt-16 mx-auto w-full md:w-5/6 p-4 bg-slate-100/85 relative z-50 shadow-sm md:shadow-md md:rounded-lg">
          {weatherData?.forecast.forecastday.map(
            (day: ForecastDay, index: number) => (
              <div
                key={index}
                /* className="border rounded-md p-2 grid grid-flow-col md:grid-flow-row animate-fade-down" */
                className={`opacity-0 animate-fade-down animate-duration-[600ms]
                  ${index === 0 ? "animate-delay-[100ms]" : ""}
                  ${index === 1 ? "animate-delay-[200ms]" : ""}
                  ${index === 2 ? "animate-delay-[300ms]" : ""}
                  ${index === 3 ? "animate-delay-[400ms]" : ""}
                  ${index === 4 ? "animate-delay-[500ms]" : ""}
                  ${index === 5 ? "animate-delay-[600ms]" : ""}
                  ${index === 6 ? "animate-delay-[700ms]" : ""}
                  ${index === 7 ? "animate-delay-[800ms]" : ""}
                `}
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
};
export default Forecast;
