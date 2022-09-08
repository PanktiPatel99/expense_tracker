import React, { useState } from "react";
import "./Expense.css";

import AddExpense from "./AddExpense";

const Expense = ({ expense, setExpense }) => {
  const [isAddTxnVisible, toggleAddtxn] = useState(false);

  const handleAddTxn = () => {
    toggleAddtxn(!isAddTxnVisible);
  };

  return (
    <div className="Expense">
      <div className="balance-box">
        <p>
          Balance: $<span className="balance">1000</span>
        </p>
        <button className="btn" onClick={handleAddTxn}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </button>
      </div>

      {isAddTxnVisible && (
        <AddExpense
          toggleAddtxn={toggleAddtxn}
          expense={expense}
          setExpense={setExpense}
        />
      )}

      <div className="expense_income_box">
        <p className="expensebox">
          Expense: <span className="isExpense">$0 </span>
        </p>
        <p className="expensebox">
          Income: <span className="isIncome">$0 </span>
        </p>
      </div>
    </div>
  );
};

export default Expense;
