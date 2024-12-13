import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Student from "./pages/Student.jsx";
import Payment from "./pages/Payment.jsx";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<LoginPage />} />
      <Route path="home" element={<Home />} />
      <Route path="student" element={<Student />} />
      <Route path="payment" element={<Payment />} />
      <Route path="app" element={<App />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={rotas} />
    </AppContextProvider>
  </StrictMode>
);
