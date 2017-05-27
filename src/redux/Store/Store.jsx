import {createStore} from 'redux'

// Reducer
function counter(state = { count: 0,drawerShow:false}, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        case 'drawerToggle':
            return{drawerShow:action.show}
        default:
            return state
    }
}

const store=createStore(counter)

export default store
