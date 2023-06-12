// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
const reducer = (state, action) => {
    if (action.type === 'add') {
        const current = [...state.contacts, action.payload];
        console.log(action.payload)
        return {...state, contacts:current}
    }
    if (action.type === 'dell') {
       
        console.log(action.payload)
        return {...state, contacts:action.payload}
    }
if (action.type === 'filter') {
       
        console.log(action.payload)
        return {...state, filter:action.payload}
    }
    return state
    
}
// const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))??[]);
export const store = createStore(reducer,{
  contacts: (JSON.parse(localStorage.getItem('contacts'))??[]),
  filter: ""
})

