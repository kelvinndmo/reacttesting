import filtersReducers from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
  const state = filtersReducers(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    EndDate: moment().endOf('month')
  })
})
test('should set sort by to amount', () => {
  const state = filtersReducers(undefined, { type: 'SORT_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    EndDate: undefined,
    sortBy: 'amount'
  }

  const action = {
    type: 'SORT_DATE'
  }

  const state = filtersReducers(currentState, action)

  expect(state.sortBy).toBe('date')
})

test('should  set text filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    EndDate: undefined,
    startDate: undefined
  }

  const action = {
    type: 'SET_TEXT',
    text: 'novak'
  }

  const state = filtersReducers(currentState, action)

  expect(state.text).toBe('novak')
})

test('should set start Date filter', () => {
  const date = moment().startOf('quarter')
  const action = {
    type: 'SET_START_DATE',
    date
  }

  const state = filtersReducers(undefined, action)
  expect(state.startDate).toEqual(date)
})

test('should set end Date filter', () => {
  const date = moment().startOf('quarter')
  const action = {
    type: 'SET_END_DATE',
    date
  }

  const state = filtersReducers(undefined, action)
  expect(state.EndDate).toEqual(date)
})
