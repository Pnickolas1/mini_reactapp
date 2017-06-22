"use strict";
import {createStore} from 'redux';

// STEP 3 DEFINE REDUCERS
const reducer = function(state={books: []},action) {
    switch (action.type){
        case "POST_BOOK":
        let books = state.books.concat(action.payload);
        return {books};
        break;
    }
    return state
}

// STEP 1 CREATE THE STORE  
const store = createStore(reducer);

store.subscribe(function(){
    console.log("the state is: " , store.getState());
    console.log("the price is: " , store.getState().price);
  //  console.log("the price is: " , store.getState()[1].price);
})


// STEP 2 create and dispatch actions
store.dispatch({ type:"POST_BOOK",
                 payload: [{
                    id: 1,
                    title: "this is the book title",
                    description: 'this is the book description',
                    price: 5.00 
                 },
                 {
                    id: 2,
                    title: "this is the 2nd book title",
                    description: 'this is the second book description',
                    price: 10.00 
                 }
                 ]
            });


//DISPATCH A SECOND ACTION; 
store.dispatch({
    type: "POST_BOOK",
    payload: {
        id: 3,
        title: "3rd book title",
        description: 'this is the 3rd book title',
        price: 33.33
    }
});