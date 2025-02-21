import {WeatherData} from "../types/types.ts";

export function threeHoursToDays(data: WeatherData[], setDataDays: React.Dispatch<React.SetStateAction<WeatherData[]>>){
    const hours = data.map(i => i.time.split(' ')[1]);
    const daysDataArr = [];
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] === '12:00') daysDataArr.push(data[i]);
    }
    setDataDays(daysDataArr);
}