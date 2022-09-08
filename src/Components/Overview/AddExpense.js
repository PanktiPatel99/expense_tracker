import React, { useState } from "react";
import "./AddExpense.css";

import { nanoid } from "nanoid";
import expenseData from "../Expenses/ExpenseData";

const AddExpense = (props) => {
  const [expense, setExpense] = useState(expenseData);
  const [type, setType] = useState("EXPENSE");
  const [addFormData, setAddFormData] = useState({
    title: "",
    amount: "",
    date: "",
    type: type,
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setType(e.target.value);
    // console.log(newFormData);

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: nanoid(),
      title: addFormData.title,
      amount: Number(addFormData.amount),
      date: new Date(addFormData.date),
      type: addFormData.type,
    };
    // console.log(addFormData);

    const newExpenses = [...expense, newExpense];
    // console.log(newExpenses);

    setExpense(newExpenses);
    props.toggleAddtxn();
  };

  return (
    <form onSubmit={handleAddFormSubmit}>
      <div className="AddExpense_form">
        <input
          type="text"
          name="title"
          placeholder="Enter a Title"
          required
          onChange={handleAddFormChange}
        ></input>
        <input
          type="number"
          name="amount"
          placeholder="Enter an Amount"
          required
          onChange={handleAddFormChange}
        ></input>
        <input
          type="date"
          name="date"
          required
          onChange={handleAddFormChange}
        ></input>

        <div className="radiobox">
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            id="expense"
            checked={type === "EXPENSE"}
            onChange={handleAddFormChange}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            id="income"
            checked={type === "INCOME"}
            onChange={handleAddFormChange}
          />
          <label htmlFor="income">Income</label>
        </div>

        <button className="btn" type="submit">
          Add Transaction
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
