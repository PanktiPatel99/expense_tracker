import React from "react";
import "./App.css";
import ExpenseApp from "./Components/Expenses/ExpenseApp";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Expense Tracker App</header>
      <ExpenseApp />
    </div>
  );
};

export default App;
