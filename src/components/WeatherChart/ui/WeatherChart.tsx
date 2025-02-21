import { getWeatherData } from "../../../helpers/WeatherApiGetData";
import {town, DataKey, Granularity, WeatherData} from "../../../types/types";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {memo, useEffect, useState} from "react";
import {threeHoursToDays} from "../../../helpers/ThreeHoursToDays.ts";
import {transformWeatherResponse} from "../../../helpers/TransformWeatherResponse.ts";

interface WeatherChartProps {
    town: town;
    townSecond: town;
    dataKey: DataKey;
    granularity: Granularity;
}

export const WeatherChart = memo(({ town, townSecond, dataKey, granularity }: WeatherChartProps) => {
    const [data, setData] = useState<WeatherData[]>([]);
    const [dataSecond, setDataSecond] = useState<WeatherData[]>([]);
    const [dataDays, setDataDays] = useState<WeatherData[]>([]);
    const [dataSecondDays, setDataSecondDays] = useState<WeatherData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setError(null);
        if (townSecond === '' && dataSecond.length) setDataSecond([]);
        if (town === '' && data.length) setData([]);
        const t = setTimeout(() => {
            if (town) {
                getWeatherData(town)
                    .then((response) => {
                        const transformedData = transformWeatherResponse(response);
                        setData(transformedData);
                    })
                    .catch((error) => {
                        console.error('Ошибка:', error);
                        setError('Не удалось загрузить данные о погоде для первого города.');
                    });
            }

            if (townSecond) {
                getWeatherData(townSecond)
                    .then((response) => {
                        const transformedData = transformWeatherResponse(response);
                        setDataSecond(transformedData);
                    })
                    .catch((error) => {
                        console.error('Ошибка:', error);
                        setError('Не удалось загрузить данные о погоде для второго города.');
                    });
            }

            if (granularity === 'days') {
                threeHoursToDays(data, setDataDays);
                threeHoursToDays(dataSecond, setDataSecondDays);

            }
        }, 1000);

        return () => {
            clearTimeout(t);
        };
    }, [town, townSecond, granularity])



    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={granularity === 'days' ? dataDays : data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={['dataMin - 10', 'dataMax + 15']}/>
                <Tooltip />
                <Legend />
                {town && data.length > 0 && (
                    <Line
                        key={`line-${dataKey}-${town}`}
                        type="monotone"
                        dataKey={dataKey}
                        stroke="#ff7300"
                        name={
                            (dataKey === 'temperature' ? "Температура (°C)" :
                                dataKey === 'pressure' ? "Давление (hPa)" :
                                    dataKey === 'humidity' ? "Влажность (%)" :
                                        dataKey === 'windSpeed' ? "Скорость ветра (м/с)" :
                                            "") + ' ' + town
                        }
                    />
                )}
                {townSecond && dataSecond.length > 0 && (
                    <Line
                        key={`line-${dataKey}-${townSecond}`}
                        type="monotone"
                        dataKey={dataKey}
                        data={granularity === 'days' ? dataSecondDays : dataSecond}
                        stroke="#82ca9d"
                        name={
                            (dataKey === 'temperature' ? "Температура (°C)" :
                                dataKey === 'pressure' ? "Давление (hPa)" :
                                    dataKey === 'humidity' ? "Влажность (%)" :
                                        dataKey === 'windSpeed' ? "Скорость ветра (м/с)" :
                                            "") + ' ' + townSecond
                        }
                    />
                )}
            </LineChart>
        </ResponsiveContainer>
    );
});
