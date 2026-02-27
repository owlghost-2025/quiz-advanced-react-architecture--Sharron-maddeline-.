import { useReducer, useEffect, useState } from "react";
import { StoreContext } from "./context/StoreContext";
import { useStore } from "./context/StoreContext";
import { reducer, initialState } from "./reducer/storeReducer";
import { useRoute } from "./hooks/useRoute";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import ProductsPage from "./pages/Products";
import CheckoutPage from "./pages/Checkout";
import SummaryPage from "./pages/Summary";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { route, navigate } = useRoute();
  const [orderInfo, setOrderInfo] = useState(null);

  const wrappedDispatch = (action) => {
    if (action.type === "CLEAR_CART") {
      setOrderInfo({ totalItems: state.totalItems, totalPrice: state.totalPrice });
    }
    dispatch(action);
  };

  useEffect(() => {
    if (!state.isAuthenticated && route !== "#/login") {
      navigate("#/login");
    }
    if (state.isAuthenticated && route === "#/login") {
      navigate("#/products");
    }
  }, [state.isAuthenticated, route]);

  const showNav = state.isAuthenticated && route !== "#/login";

  return (
    <StoreContext.Provider value={{ state, dispatch: wrappedDispatch }}>
      {showNav && <Navbar navigate={navigate} route={route} />}
      {route === "#/login" && <LoginPage navigate={navigate} />}
      {route === "#/products" && state.isAuthenticated && <ProductsPage />}
      {route === "#/checkout" && state.isAuthenticated && <CheckoutPage navigate={navigate} />}
      {route === "#/summary" && state.isAuthenticated && <SummaryPage navigate={navigate} orderInfo={orderInfo} />}
    </StoreContext.Provider>
  );
}