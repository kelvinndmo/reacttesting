import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact>
      Home
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      Create Expense
    </NavLink>
  </header>
)

export default Header
