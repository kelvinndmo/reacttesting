import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles/style.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getExpenses from "./selectors/expenses";
import { setTextFilter } from "./actions/filters";
import { addExpense } from "./actions/expenses";
import "./firebase/firebase";

const store = configureStore();

store.dispatch(
  addExpense({ description: "novak bill", createdAt: 2000, amount: 5000 })
);
store.dispatch(
  addExpense({ description: "Water Bill", amount: 2, createdAt: 30000 })
);

const state = store.getState();
const visibleExpenses = getExpenses(state.expenses, state.filters);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("areba"));
