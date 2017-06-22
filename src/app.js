"use strict";
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCERS
const reducer = function(state=0,action) {
    switch (action.type){
        case "INCREMENT":
        return state + action.payload;
        break;
    }
    return state
}

// STEP 1 CREATE THE STORE  
const store = createStore(reducer);

store.subscribe(function(){
    console.log("the state is: " + store.getState());
})


// STEP 2 create and dispatch actions
store.dispatch({ type:"INCREMENT", payload: 1})