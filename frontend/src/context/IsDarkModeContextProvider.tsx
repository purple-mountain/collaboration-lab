import { useState } from "react";
import { IsDarkModeContext } from "./IsDarkModeContext";

function IsDarkModeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <IsDarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </IsDarkModeContext.Provider>
  );
}

export { IsDarkModeContextProvider };
