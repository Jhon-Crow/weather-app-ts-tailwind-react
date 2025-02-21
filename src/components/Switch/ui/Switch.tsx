import { Granularity } from "../../../types/types.ts";
import {useCallback} from "react";

interface SwitchProps {
    selectedOption: Granularity;
    setSelectedOption: (option: Granularity) => void;
}

export const Switch = ({ selectedOption, setSelectedOption }: SwitchProps) => {
    const onChangeHandler = useCallback(() => {
        setSelectedOption(selectedOption === 'days' ? '3hours' : 'days');
    },[selectedOption]);

    return (
        <div className="flex items-center bg-gray-200 w-max rounded-lg dark:opacity-85">
            <div
                onClick={onChangeHandler}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedOption === 'days' ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
            >
                Дни
            </div>
            <div
                onClick={onChangeHandler}
                className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 ${
                    selectedOption === '3hours' ? 'bg-green-500 text-white' : 'bg-gray-200'
                }`}
            >
                3 Часа
            </div>
        </div>
    );
};
