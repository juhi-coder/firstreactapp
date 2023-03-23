import React from "react";
// import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props);
  return (
    <div>
      <div>{props.expenses.date.toISOString()}</div>
      <div>
        <h2>{props.expenses.title}</h2>
      </div>
      <div>${props.expenses.amount}</div>
      <div>{props.expenses.location}</div>
    </div>
  );
}
export default Expenses;
