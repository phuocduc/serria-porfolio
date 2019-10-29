import { createStore } from 'redux'


const initialize = {
    username: '',
    password: ''
}
function rootReducer (state=initialize,action){
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state, ...action.payload
            }
    
        default:
            return state
    }
}


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




export default store