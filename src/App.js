import "./styles.css";

// src/App.js
import React, { useState, useEffect } from "react";
import ExpenseForm from "./components12/ExpenseForm";
import ExpenseList from "./components12/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((exp) =>
        exp.id === updatedExpense.id ? updatedExpense : exp
      )
    );
    setEditingExpense(null);
  };

  const deleteExpense = (expense) => {
    setExpenses(expenses.filter((exp) => exp.id !== expense.id));
  };

  const handleAddOrUpdate = (expense) => {
    if (editingExpense) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }
  };

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddOrUpdate} />
      <ExpenseList
        expenses={expenses}
        onEdit={editExpense}
        onDelete={deleteExpense}
      />
    </div>
  );
};

export default App;
