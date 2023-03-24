import React from "react";

const ExpenseDetails=(props)=>{
const title=props.title;
const amount=props.amount;
console.log('abcds')
return(
    <div>
    <h2>{title}</h2>

    <div>{amount}</div>
    </div>
);
}
export default ExpenseDetails ;