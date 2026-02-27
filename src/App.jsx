import { useState } from "react";
import "./App.css";
import "./index.css";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <h1><span>ID's Place</span> Bill Checker</h1>
      <Form />
      <Footer />
    </>
  );
}

export default App;