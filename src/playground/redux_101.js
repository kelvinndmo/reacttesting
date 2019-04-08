import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1}) => ({
    type:'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 5}) => ({
    type:'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type:'RESET'
})

const setCount = ({count}) => ({
    type:'SET',
    count

})

//Reducers 
//1. They are pure functions - output is determined by the input i.e state and actions
//2. Never change state or actions


const  countReducer = (state = {count: 0}, action) => {
    switch(action.type){
         case 'INCREMENT':
             return {
                 count : state.count + action.incrementBy
             };
         case 'DECREMENT':
             return {
                 count : state.count - action.decrementBy 
             };
         case 'RESET':
             return {
                 count: 0
             }
         case 'SET':
             return {
                 count:action.count
             }
 
         
         default:
           return state;
    }} 
 
//  const unsub = store.subscribe(() => {
//      console.log(store.getState())
//  }

 const store = createStore(countReducer())



//actions - an object that gets sent to the store
// i.e increment,decrement,reset

// store.dispatch(
//     {
//         type:'INCREMENT',
//         IncrementBy:5
//     }
// );

store.dispatch(incrementCount({incrementBy : 50}))

store.dispatch(decrementCount({decrementBy:15 }))
store.dispatch(setCount({count:101}))

store.dispatch(resetCount())


//Reducers - Actions describe that something happened but don't specify how the application state changes in response.