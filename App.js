/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AppRoute from './src/routes/AppRoute';
import reducers from './src/reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoute />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
