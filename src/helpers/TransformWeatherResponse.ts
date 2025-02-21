import {WeatherData} from "../types/types.ts";

export function transformWeatherResponse(response: any){
    const transformedData: WeatherData[] = response.list.map((item: any) => ({
        time: new Date(item.dt * 1000)
            .toLocaleTimeString([], {
                day: "numeric",
                month: "2-digit",
                hour: '2-digit',
                minute: '2-digit'
            }).replace(',', ''),
        temperature: Math.round(item.main.temp),
        pressure: Math.round(item.main.pressure),
        humidity: Math.round(item.main.humidity),
        windSpeed: item.wind.speed,
    }));
    return transformedData;
}