import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import SelectedExpense from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>kelvin onkundi ndemo</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
    {}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
  };
};
export default connect(mapStateToProps)(ExpenseList);
