import React from "react";
import "./ExpenseItems.css";

import expenseData from "../Expenses/ExpenseData";

const ExpenseItems = () => {
  return (
    <div className="ExpenseItems">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseData
            .sort((a, b) => {
              return a.amount - b.amount;
            })
            .map((expense) => (
              <tr key={expense.id} data={expense}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>
                  {expense.date.toLocaleString("en-us", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default ExpenseItems;
