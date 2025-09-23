import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme == 'dark') {
            setIsDarkMode(false);
            document.documentElement.classList.add('dark');
        }
        else {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(false);

        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(true);
        }
    };


    return <button onClick={toggleTheme} aria-label="Toggle theme"
      className={cn(
        "relative w-16 h-8 rounded-full px-2 flex items-center justify-between",
        "transition-colors duration-300",
        isDarkMode ? "bg-gray-700" : "bg-gray-300"
    )}> 
      {/* icons inside track */}
      <Sun className="h-4 w-4 text-yellow-400" />
      <Moon className="h-4 w-4 text-blue-900" />

      {/* knob */}
      <span
        className={cn(
          "absolute top-0.5 left-0.5 w-7 h-7 rounded-full bg-white shadow-md",
          "transition-transform duration-300",
          isDarkMode ? "translate-x-8" : "translate-x-0"
        )}
      />

        </button>
}