//src / components / ExpenseList.js;
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
