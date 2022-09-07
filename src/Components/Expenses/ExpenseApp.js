import React from "react";

import Expense from "../Overview/Expense";
import ExpenseItems from "../Transaction/ExpenseItems";

const ExpenseApp = () => {
  return (
    <div className="Expense_app">
      <Expense />
      <ExpenseItems />
    </div>
  );
};

export default ExpenseApp;
