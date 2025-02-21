import {useState} from "react";
import {Input} from "./components/Input/ui/Input.tsx";
import {WeatherChart} from "./components/WeatherChart/ui/WeatherChart.tsx";
import {DataKey, Granularity, town} from "./types/types.ts";
import {Select} from "./components/Select/ui/Select.tsx";
import {Switch} from "./components/Switch/ui/Switch.tsx";
import ThemeSwitcher from "./components/ThemeSwitcher/ui/ThemeSwitcher.tsx";
function App() {
        const [town, setTown] = useState<town>('');
        const [townSecond, setTownSecond] = useState<town>('');

        const [dataKey, setDataKey] = useState<DataKey>('temperature');
        const [granularity, setGranularity] = useState<Granularity>('3hours');

        const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <div className='flex flex-col gap-2 h-screen transition-colors duration-300 p-4 dark:bg-black'>
        <Input setTown={setTown} town={town}/>
        <Input
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
            setTown={setTownSecond}
            town={townSecond}/>
        <WeatherChart townSecond={townSecond} granularity={granularity} dataKey={dataKey} town={town}/>
        <div className='flex justify-end gap-4'>
            <Select selectedKey={dataKey} setSelectedKey={setDataKey}/>
            <Switch selectedOption={granularity} setSelectedOption={setGranularity}/>
        </div>
        <ThemeSwitcher/>
    </div>

  )
}

export default App
