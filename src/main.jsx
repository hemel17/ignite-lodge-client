import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router/Router.jsx";
import Main from "./layout/Main.jsx";
import MyThemeProvider from "./providers/MyThemeProvider/MyThemeProvider.jsx";
import AuthProvider from "./providers/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* dark || light mode */}
    <MyThemeProvider>
      {/* User info */}
      <AuthProvider>
        {/* material tailwind */}
        <ThemeProvider>
          {/* react router */}
          <RouterProvider router={router}>
            <Main />
          </RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </MyThemeProvider>
  </React.StrictMode>
);
