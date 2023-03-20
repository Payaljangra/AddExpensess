import React from 'react';
import './ExpenseItem.css';
//import React from 'react';
import Card from '../UI/Card';
import ExpenseDate  from './ExpenseDate';
// function ExpenseItem() {
    
//   return (
//     <div className='expense-item'>
//       <div>15 feb 2023</div>
//       <div className='expense-item__description'>
//         <h2>Car Insurance</h2>
//         <div className='expense-item__price'>$294.67</div>
//       </div>
//     </div>
//   );
// } 
const ExpenseItem = (props) => {
 
    // const month = props.date.toLocaleString('en-US',{month : 'long'});
    // const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    // const year = props.date.getFullYear();
    // console.log(props)
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by react');
    // // describe the value , update the value
    
    // const clickHandler = () => {
    //       setTitle('Updated!');
    //       console.log(title);
    // };
     return (
        <li>
      <Card className='expense-item'>
         
        <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
      </li>
    );
  }
  
  export default ExpenseItem;

// function ExpenseItem(){
//     const expenseDate = new Date(2021, 2, 28);
//     const expenseTitle = 'Car Insurance';
//     const expenseAmount = 294.67;
//     return(

//         <div className='expense-item'>
//             <div>{expenseDate.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{expenseTitle}</h2>
//                 <div className='expense-item__price'>${expenseAmount}</div>
//             </div>
//         </div>
//     );
// }

