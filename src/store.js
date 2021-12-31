import {createStore , applyMiddleware} from 'redux';

const initialState = {
    contacts:[]
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts:  action.payload
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;