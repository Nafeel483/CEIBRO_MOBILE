import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import creatSagaMiddleware from 'redux-saga';
import rootReducer from './Src/Redux/Reducers';
import rootSaga from './Src/Redux/Sagas';
// import { types } from './Src/Redux/Types/getMessage';
import { composeWithDevTools } from 'redux-devtools-extension';
import FlashMessage from "react-native-flash-message";
import Root from './Src/setup';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: []
}
const sagaMiddleware = creatSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// store.dispatch({ type: types.INIT_SOCKET_SERVICE });
const persistedStore = persistStore(store);
const middlewareList = [sagaMiddleware];


const App = () => {
  return (
    <>
      <Provider store={store}  >
        <PersistGate persistor={persistedStore}>
          <Root />
          <FlashMessage position="top" /> 
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
sagaMiddleware.run(rootSaga);