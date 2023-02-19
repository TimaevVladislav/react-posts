import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './store/reducer/rootReducer'
import {fobiddenWordwsMiddleware} from './store/middleware/middleware'
import {sagaWatcher} from "./store/saga/sagas"

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
     applyMiddleware(thunk, fobiddenWordwsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

