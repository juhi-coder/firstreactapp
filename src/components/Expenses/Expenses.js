import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails ";
import './Expenses.css';
import './ExpenseDetails.css'
const Expenses = (props) => 
{
  
  return (
    <div className="expenses">  
      <div className="expense-item">
      <ExpenseDetails title={props.expenses.title} amount={props.expenses.amount}/>  
      <ExpenseDate date={props.expenses.date}/>   
        <div>{props.expenses.location}</div>
      </div>
    </div>
  );
};
export default Expenses;
