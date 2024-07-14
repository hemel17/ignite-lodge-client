import { createContext } from "react";

export const ThemeContext = createContext();

const MyThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={""}>{children}</ThemeContext.Provider>;
};

export default MyThemeProvider;
