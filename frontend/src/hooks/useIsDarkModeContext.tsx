import { useContext } from "react";
import { IsDarkModeContext } from "../context/IsDarkModeContext";

export function useIsDarkModeContext() {
  const context = useContext(IsDarkModeContext);

  if (!context) {
    throw Error(
      "useIsDarkModeContext must be used inside an IsDarkModeContextProvider",
    );
  }

  return context;
}
