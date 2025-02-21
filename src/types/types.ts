export type town = string;

export type DataKey = 'temperature' | 'pressure' | 'humidity' | 'windSpeed';

export type Granularity = 'days' | '3hours';

export type DataKeyLabels = Record<DataKey, string>;

export interface WeatherData {
    time: string;
    temperature: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
}