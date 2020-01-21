import React from "react";
import "./App.css";
import { MainContainer } from "./components/MainContainer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
