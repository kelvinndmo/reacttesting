import { editExpense, removeExpense, addExpense } from '../../actions/expenses'

// selectors

import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

test('should set up remove axpense action generator', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// when using object and arrays we can use toEqual and use toBe when using stings and numbers
test('should add expenses', () => {
  const editexpense = editExpense('1234', {
    description: 'kelvin onkundi',
    note: 'ndemo kevin',
    amount: 500,
    createdAt: 50000
  })

  expect(editexpense).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    updates: {
      description: 'kelvin onkundi',
      note: 'ndemo kevin',
      amount: 500,
      createdAt: 50000
    }
  })
})

test('should setup an add expense object', () => {
  const expenseData = {
    description: 'kelvin onkundi',
    note: 'ndemo kevin',
    amount: 500,
    createdAt: 50000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should add expanse action object with default value', () => {
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

const expenses = [
  {
    id: '1',
    description: 'novak onkundi',
    note: '',
    amount: 4000,
    createdAt: 0
  },
  {
    id: '2',
    description: 'novak',
    note: '',
    amount: 1000,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'credit',
    note: '',
    amount: 45,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
]

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    StartDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2]])
})

// test('Should filter by start date', () => {
//   const filters = {
//     text: '',
//     sortBy: 'date',
//     startDate: moment(0),
//     endDate: undefined
//   }
//   const result = selectExpenses(expenses, filters)
//   expect(result).toEqual([expenses[2], expenses[0]])
// })

// test('should filter by end Date', () => {
//   const filters = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: moment(0)
//       .add(2, 'years')
//       .valueOf()
//   }

//   const result = selectExpenses(expenses, filters)
//   expect(result).toEqual([expenses[1], expenses[2]])
// })
