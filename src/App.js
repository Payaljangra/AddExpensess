//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

import React,{useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";


  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Stationary",
      amount: 94.24,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
         return [expense, ...prevExpenses];
      });
  };

    return (
       <div>
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items={expenses} />
       </div>
    );
};

export default App;

//  {
//         expenses.map(expense=>{
//           return <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//           />
//         })
//        }  */

//        return React.createElement(
//         "div",
//         {},  //no attribute
//         React.createElement("h2", {}, "Let's get started!"),
//         React.createElement(Expenses, { items: expenses } )
//       );
//       return (
//         <div>
//           <h2>Let's get started!</h2>
//            <Expenses items={expenses} />
//         </div>
//       )