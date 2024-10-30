import {createStore} from 'redux';

const initialState = {
    value: 0
};

function appReducer(prevState = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return{
                ...prevState,
                value: prevState.value + 1
            };
        case 'DECREMENT':
            return{
                ...prevState,
                value: prevState.value - 1
            }
        default:
            return prevState;
    }
}

const store = createStore(appReducer)
export default store;