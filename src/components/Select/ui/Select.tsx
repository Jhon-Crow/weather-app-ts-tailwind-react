import { useCallback } from "react";
import {DataKey, DataKeyLabels} from '../../../types/types';
interface SelectProps {
    selectedKey: DataKey;
    setSelectedKey: (key: DataKey) => void;
}

const dataKeys: DataKey[] = ['temperature', 'pressure', 'humidity', 'windSpeed'];

const dataKeyLabels: DataKeyLabels = {
    temperature: "Температура (°C)",
    pressure: "Давление (hPa)",
    humidity: "Влажность (%)",
    windSpeed: "Скорость ветра (м/с)"
};

export const Select = ({ selectedKey, setSelectedKey }: SelectProps) => {
    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedKey(e.target.value as DataKey);
    }, [setSelectedKey]);

    return (
        <select
            value={selectedKey}
            onChange={onChangeHandler}
            className="transition-colors duration-300 border border-gray-300 rounded-md p-2 w-min focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:text-white"
        >
            {dataKeys.map((key) => (
                <option className='dark:bg-black' key={key} value={key}>
                    {dataKeyLabels[key]}
                </option>
            ))}
        </select>
    );
};
