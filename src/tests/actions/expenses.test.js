import { editExpense, addExpense, removeExpense } from '../../actions/expenses'
import uuid from 'uuid'

test('test when one removes an expense', () => {
  const action = removeExpense({ id: '12345' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  })
})

test('edit expense', () => {
  const updates = {
    note: 'kshs.50'
  }
  const action = editExpense('5000', updates)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '5000',
    updates: updates
  })
})

test('adding an expense', () => {
  const expense = {
    description: 'onkundi',
    note: 'kelvin onkundi ndemo',
    amount: 5000,
    createdAt: 5000
  }
  const action = addExpense(expense)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  })
})

test('adding an expense with no data', () => {
  const expense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense(expense)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  })
})
