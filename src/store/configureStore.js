import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import expenseReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    }),
    {},
    composeWithDevTools(applyMiddleware())
  )
  return store
}
