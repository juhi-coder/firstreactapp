import React from "react";
import ExpenseDetails from "./ExpenseDetails ";
const Expenses = (props) => 
{
  const year = props.expenses.date.getFullYear();
  const month = props.expenses.date.toLocaleString("en-Us", { month: "long" });
  const day = props.expenses.date.toLocaleString("en-Us", { day: "2-digit" });
  return (
    <div>
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div>
      <ExpenseDetails title={props.expenses.title} amount={props.expenses.amount}/>     
        <div>{props.expenses.location}</div>
      </div>
    </div>
  );
};
export default Expenses;
