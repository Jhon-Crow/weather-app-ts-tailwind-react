import {useCallback} from "react";
import {town} from '../../../types/types.ts'
interface InputProps {
    town: town;
    setTown: (town: town) => void;
    setIsCollapsed?: (isCollapsed: boolean) => void;
    isCollapsed?: boolean;
}

export const Input = ({ setTown, town, isCollapsed, setIsCollapsed }: InputProps) => {
    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTown(e.target.value);
    }, [setTown]);

    const onCollapseHandler = useCallback(() => {
        if (setIsCollapsed) setIsCollapsed(!isCollapsed);
        setTown('');
    }, [setIsCollapsed, isCollapsed]);

    if (isCollapsed){
        return (
            <button
                onClick={onCollapseHandler}
                className='
                p-1 cursor-pointer border
                dark:text-white'>
                Compare with city
            </button>
        )
    }

    return (
        <>
            <div className="relative w-full">
                <input
                    type="text"
                    value={town}
                    onChange={onChangeHandler}
                    placeholder="Введите название города"
                    className="
            border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:text-white"
                />
                {setIsCollapsed && (
                    <button
                        onClick={onCollapseHandler}
                        className='
                absolute
                right-2 top-1/2 transform -translate-y-1/2
                p-1 cursor-pointer border
                dark:text-white'>
                        Delete
                    </button>
                )}
            </div>
        </>
            );
};



