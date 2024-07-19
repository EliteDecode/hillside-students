import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Landing from "./screens/Landing";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IdcardApplication from "./screens/IdCardApplication";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import VerifyRegisteredUser from "./screens/VerifyRegisteredUser";
import SendRequest from "./screens/SendRequest";
import RegistrationComplete from "./screens/RegistrationComplete";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration-complete"
            element={<RegistrationComplete />}
          />
          <Route
            path="/verify/:userId/:uniqueString"
            element={<VerifyRegisteredUser />}
          />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/id_application"
              element={<IdcardApplication />}
            />
            <Route path="/dashboard/request" element={<SendRequest />} />
          </Route>
        </Routes>

        <ToastContainer />
      </Router>
    </Provider>
  );
}
