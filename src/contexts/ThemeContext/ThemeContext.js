import React, { useCallback, useContext, useMemo, useState } from "react";

const ThemeContext = React.createContext('light');

export const useTheme = () => useContext(ThemeContext);

const supportedThemes = ['light', 'dark'];

const validateTheme = (theme) => supportedThemes.includes(theme) ? theme : 'light';

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(validateTheme(localStorage.getItem('theme')));

    const toggleTheme = useCallback(() => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    }, [theme]);

    const value = useMemo(() => ({
        theme, toggleTheme
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;