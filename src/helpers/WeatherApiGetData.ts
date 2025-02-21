import axios from 'axios';
import {town} from "../types/types.ts";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherData = async (town: town) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: town,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
        throw error;
    }
};
