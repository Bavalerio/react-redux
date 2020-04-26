import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainer";
import HooksCakeContainer from "./components/hooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import NewCakeContainer from "./components/newCakeContainer";
import ItemContainer from "./components/itemContainer";
import UsersContainer from "./components/usersContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
        <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
