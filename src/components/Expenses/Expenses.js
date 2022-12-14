import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState(2022);
  const onYearChangeHandler = (year) => {
    setYear(year);
    console.log(year);
  };

  console.log(props.data);

  const filteredExpenses = props.data.filter((expense) => {
    const newDate = new Date(expense.date);
    return newDate.getFullYear().toString() === year;
  });

  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearChange={onYearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (
          <p> NO expenses Found </p>
        ) : (
          filteredExpenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
