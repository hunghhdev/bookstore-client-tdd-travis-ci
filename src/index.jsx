import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './component/App'
import reducers from './module'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDom.render(
    <Provider store={
        createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__
            && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    }>
        <App />
    </Provider>,
    document.getElementById('root'))
