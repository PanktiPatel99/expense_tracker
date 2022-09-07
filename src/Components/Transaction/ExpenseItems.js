import React, { useState } from "react";
import "./ExpenseItems.css";

import expenseData from "../Expenses/ExpenseData";

const ExpenseItems = () => {
  const [searchItems, setSearchItems] = useState("");

  const searchHandle = (e) => {
    setSearchItems(e.target.value);
    // console.log(e.target.value);
    // console.log(searchItems);
  };

  let expenseDataSearch = expenseData.filter((item) => {
    return Object.keys(item).some((newItem) => {
      return item[newItem]
        .toString()
        .toLowerCase()
        .includes(searchItems.toString().toLowerCase());
    });
  });
  // console.log(expenseDataSearch);

  return (
    <div className="ExpenseItems">
      <div className="search">
        <p>Transaction Items</p>
        <input
          onChange={searchHandle}
          value={searchItems}
          placeholder="Search"
          type="text"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseDataSearch
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
