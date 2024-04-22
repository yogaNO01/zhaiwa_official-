import ReactDOM from "react-dom/client";
import BasicLayout from "@/layout/BasicLayout";
import { BrowserRouter } from "react-router-dom";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BasicLayout />
  </BrowserRouter>
);
