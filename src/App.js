// import logo from './logo.svg';
import "./App.css";
import PersonalInfo from "./components/Personal-Info";
import React, { useState, useEffect } from "react";

function App() {
  const initialFormValues = {
    fLName: "",
    email: "",
    phoneNumber: "",
  };

  const initialFormErrors = {
    fLname: "",
    email: "",
    phoneNumber: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);

  return (
    <div className="App">
      <h1>Multi-Step-Form</h1>
      <PersonalInfo />
    </div>
  );
}

export default App;
