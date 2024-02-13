import { createContext } from "react";

const IsDarkModeContextDefaultValue = {
  isDarkMode: false,
  setIsDarkMode: (state: boolean) => {
    !state;
  },
};

const IsDarkModeContext = createContext(IsDarkModeContextDefaultValue);

export { IsDarkModeContext };
