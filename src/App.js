import logo from "./logo.svg";
import "./App.css";
import ExpenseItems from "./components/ExpenseItem";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItems></ExpenseItems>
      </header>
    </div>
  );
}

export default App;
