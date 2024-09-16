//src/components/ExpenseItem.js
import React from "react";

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div>
      <span>{expense.description}</span>
      <span>{expense.amount}</span>
      <span>{expense.date}</span>
      <button onClick={() => onEdit(expense)}>Edit</button>
      <button onClick={() => onDelete(expense)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
