import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import PedidosPage from "./Pages/PedidosPage";
import NosotrosPage from "./Pages/NosotrosPage";
import GyozasPage from "./Pages/GyozasPage";
import OrdersPage from "./Pages/OrdersPage";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/pedidos">
            <PedidosPage />
          </Route>
          <Route path="/nosotros">
            <NosotrosPage />
          </Route>
          <Route path="/comococinargyozas">
            <GyozasPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
