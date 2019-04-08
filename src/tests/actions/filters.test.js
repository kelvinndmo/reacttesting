import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters'
import moment from 'moment'

test('should generate set start date', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})

test('should generate setEndDate for action', () => {
  const action = setEndDate(moment(0))

  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})

test('set text filter', () => {
  const action = setTextFilter('onkundi')
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'onkundi'
  })
})

test('should filter with default args', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: ''
  })
})

test('should generate action for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_DATE' })
})
test('should generate action for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_AMOUNT' })
})
