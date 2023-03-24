//import logo from "./logo.svg";
//import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "maggi",
      amount: "250",
      date: new Date(2023, 9, 2),
      location: "patna",
    },
    {
      id: "e2",
      title: "cream",
      amount: "500",
      date: new Date(2023, 22, 2),
      location: "chandigarh",
    },
    {
      id: "e3",
      title: "Sony TV",
      amount: "10000000",
      date: new Date(2023, 9, 7),
      location: "muzzafarpur",
    },
    {
      id: "e4",
      title: "dress",
      amount: "1500",
      date: new Date(2022, 9, 2),
      location: "Ara",
    },
  ];

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
