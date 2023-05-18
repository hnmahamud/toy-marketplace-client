import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProviders from "./context/AuthProviders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </AuthProviders>
);
