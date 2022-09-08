import React, { useState } from "react";
import "./Expense.css";

import AddExpense from "./AddExpense";

const Expense = (props) => {
  const [isAddTxnVisible, toggleAddtxn] = useState(false);

  const handleAddTxn = () => {
    toggleAddtxn(!isAddTxnVisible);
  };

  return (
    <div className="Expense">
      <div className="balance-box">
        <p>
          Balance:s
          <span className="balance"> ${props.income - props.expense}</span>
        </p>
        <button className="btn" onClick={handleAddTxn}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </button>
      </div>

      {isAddTxnVisible && (
        <AddExpense
          toggleAddtxn={toggleAddtxn}
          addTransaction={props.addTransaction}
        />
      )}

      <div className="expense_income_box">
        <p className="expensebox">
          Expense: <span className="isExpense">${props.expense}</span>
        </p>
        <p className="expensebox">
          Income: <span className="isIncome">${props.income}</span>
        </p>
      </div>
    </div>
  );
};

export default Expense;
