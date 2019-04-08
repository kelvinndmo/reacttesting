import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpense from '../components/AddExpensePage'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboard} exact />
        <Route path='/create' component={AddExpense} />
        <Route path='/edit/:id' component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
