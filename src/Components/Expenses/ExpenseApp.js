import React, { useState, useEffect } from "react";

import Expense from "../Overview/Expense";
// import ExpenseItems from "../Transaction/ExpenseItems";
import Transaction from "../Transaction/Transaction";

const ExpenseApp = (props) => {
  const [transaction, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transaction.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transaction]);

  return (
    <div className="Expense_app">
      <Expense
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <Transaction transaction={transaction} />
      {/* <ExpenseItems /> */}
    </div>
  );
};

export default ExpenseApp;
