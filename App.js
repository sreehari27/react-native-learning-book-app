import React from "react";
import NewStackNavigation from "./src/constents/AppNavigation";
import { Provider as StoreProvider } from 'react-redux';
import store  from "./src/redux/Store";

export default function App(){
  return(
    <StoreProvider store={store}>
      <NewStackNavigation/>
    </StoreProvider>
  )
}






