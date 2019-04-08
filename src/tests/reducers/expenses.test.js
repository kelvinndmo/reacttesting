import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expenses', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should  not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should  add an expense', () => {
  const expense = {
    description: 'kelvin onkundi',
    id: '5',
    note: 'back 95',
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
    amount: 50000
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense ', () => {
  const amount = 12200

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(12200)
})

test('should edit an expense ', () => {
  const amount = 12200

  const action = {
    type: 'EDIT_EXPENSE',
    id: 50,
    updates: {
      amount
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(50000)
})
