import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import ClassBinding from "./components/style-binding/classBinding";
// import EventBinding from "./components/event-binding/EventBinding";
// import RealTime from "./components/event-binding/realTime";
// import Scrolling from "./components/event-binding/scrolling";
// import KeyEvents from "./components/key-events/KeyEvents";
// import Validations from "./components/key-events/Validations";
// import { ClipBoard } from "./components/clipboardEvents/ClipBoard";
// import Home from "./components/Home/Home";
// import Databinging from "./components/data-binding/data-binding";
// import InlineStyle from "./components/style-binding/InlineStyle";

// import Grid from "./components/grid/grid";
// import MyForm from "./components/classComponents/Form";
// import Logincomponent from "./components/classComponents/login.component";
// import FakeStore from "./components/classComponents/FakeStore";
// import Practic from "./components/Practic";
// import PureClassComponent from "./components/classComponents/PureComponent";
import FormDataComponent from "./components/form-components/FormData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
