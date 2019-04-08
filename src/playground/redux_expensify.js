import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// import EditExpense from '../components/EditExpense';


//Expenses reducer
const expensesReducerDefaultState = []
const expenseReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } 
            })
        default:
            return state;
    }

};


//ADD EXPENSE
const addExpense = (
    {
        description = '',
         note = '', 
         amount = 0, 
         createdAt = 0
        } = {}
        ) => ({
    type:'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//Remove Expense
const removeExpense = ({id}) => ({
    type:'REMOVE_EXPENSE',
    id

})

//Edit expense
const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
})



/////FILTER REDUCER CODE

//filter Reducer
const filterReducerDefaultStore = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    EndDate:undefined
}

const filterReducer = (state=filterReducerDefaultStore,action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'SORT_DATE':
            return {
                ...state,
                sortBy:'date'

            }
        case 'SET_START_DATE':
        return {
            ...state,
            startDate:action.date
        }
        case 'SET_END_DATE':
        return {
            ...state,
            startDate:action.date
        }
        default:
            return state
    }
}

//add text
const setTextFilter = (text = '') => (
    {
        type:'SET_TEXT',
        text,
    }
)

const sortByAmount = () => (
    {
        type:'SORT_AMOUNT',
    }
)

const sortByDate = () => (
    {
        type:'SORT_DATE',
    }
)
 
const setStartDate = (date) => (
    {
        type:'SET_START_DATE',
        date
    }
)

const setEndDate = (date) => ({
    type:'SET_END_DATE',
    date
})

//Get visible expenses



const getVisibleExpenses = (expenses, {text, startDate,EndDate,sortBy}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const EndDateMatch = typeof EndDate !== 'number' || expense.createdAt <= EndDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && EndDateMatch && textMatch 
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}
//STORE INTERACTIONS
//store creation
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer
    })
    )

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

        console.log(visibleExpenses)
    })


// store.subscribe(() => {
//     console.log(store.getState())
// })

//our dispatch to the store
const exp1  =  store.dispatch(addExpense({description:'Rent', amount:1000000}));
// console.log(exp1.expense.id)

const exp2 = store.dispatch(addExpense({description:'tee', amount:1000,createdAt:1000}));
// store.dispatch(removeExpense({id:exp1.expense.id}))
// store.dispatch(editExpense(exp2.expense.id, {amount:5000}))
// store.dispatch(setTextFilter('tee'))
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(-1250));
// store.dispatch(setEndDate(14500));
// store.dispatch(setEndDate());

const demoState = {
    expenses : [{
        id:'kelvin',
        description:'January Rent',
        note:'Final rent payment',
        amount:54500,
        createdAt:0
    }],
    filters : {
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        EndDate:undefined
    }
};

//object spread operator - define new objects while grabbing what was existing in the old object
