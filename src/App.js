import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
// import { Route, Routes } from "react-router";
import Layout from "./Companents/Layout";
import Table from "./Companents/Table";
import Counter from "./containers/Counter";
import Todo from "./containers/Todo";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Todo" element={<Todo />} />
          {/* <Counter /> */}
        </Route>
      </Routes>
    </div>
  );
}
export default App;
