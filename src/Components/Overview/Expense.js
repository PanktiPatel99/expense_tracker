import React from "react";
import "./Expense.css";

const Expense = () => {
  return (
    <div className="Expense">
      <div className="balance-box">
        <p>
          Balance: $<span className="balance">1000</span>
        </p>
        <button className="btn">ADD</button>
      </div>

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
