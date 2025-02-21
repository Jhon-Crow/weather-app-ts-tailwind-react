import React, {useState} from 'react';
import Sun from '../../../assets/icons/Sun.tsx';
import Moon from '../../../assets/icons/Moon.tsx';

const ThemeSwitcher: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    const themeToggle = () => {
        document.getElementById('root')!.classList.toggle('dark');
        if (isDark) {
            setIsDark(false);
        } else {
            setIsDark(true);
        }
    };

    return (
        <button
            onKeyDown={(e) => e.preventDefault()}
            onClick={themeToggle}
            className="rounded-full cursor-pointer"
        >
            {isDark ? <Moon/> : <Sun/>}
        </button>
    );
};

export default ThemeSwitcher;
