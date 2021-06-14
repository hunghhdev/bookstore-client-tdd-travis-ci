import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../module';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const renderWithRedux = (
    ui,
    {
        initialState,
        store = createStoreWithMiddleware(reducers, initialState)
    }
) => ({
    ...render(
        <Provider store={store}>{ui}</Provider>
    )
})

export default renderWithRedux;
