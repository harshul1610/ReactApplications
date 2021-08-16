import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const FilterYearHandler = (year) => {
    setFilteredYear(year);
  }

  return (
    <div>
    <ExpensesFilter selected={filteredYear} onFilterYear={FilterYearHandler}/>
    <Card className="expenses">
          {props.items.map(function (item) {
            return (
                <ExpenseItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                ></ExpenseItem>
            );
          })}
        </Card>
    </div>
    
  );
}

export default Expenses;
