import React from "react";
import LoginForm from "./components/LoginForm";
import PickerComponent from "./components/PickerComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Formik Materail-UI</h1>
      <LoginForm />
      <br />
      <PickerComponent />
    </div>
  );
}
