import React from "react";
// import { Route, Routes } from "react-router";
import "./App.css";
// import Counter from "./counter/Counter";
import CounterSlice from "./counter/CounterSlice";

function App() {
  return (
    <div className="container mx-auto">
      <CounterSlice />
      {/* <Counter/> */}
    </div>
  );
}
export default App;
