import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme == 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        else {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);

        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };


    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 w-16 h-8 flex items-center px-1 cursor-pointer rounded-full transition-colors duration-300",
        isDarkMode ? "bg-gray-700" : "bg-gray-300",

        "focus:outline-hidden"
    )}> 
        {" "}
        {isDarkMode ? (<Sun className="h-4 w-4 text-yellow-400" /> ):
        ( <Moon className="h-4 w-4 text-blue-900" />)} 

      <div
        className={cn(
          "absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300",
        isDarkMode ? "translate-x-8" : "translate-x-0"
        )}
      />

        </button>
}