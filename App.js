import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/entities/store';
import MainApp from './src/MainApp';


export default function App() {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  );
}