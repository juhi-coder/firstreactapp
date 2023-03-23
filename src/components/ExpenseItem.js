import React from "react";
import Expenses from "./Expenses.js";

function ExpenseItem(props) {
  return props.expenses.map((expenses, index) => {
    return <Expenses expenses={expenses} key={index} />;
  });
}
export default ExpenseItem;
