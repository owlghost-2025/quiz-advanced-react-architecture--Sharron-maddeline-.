import { createContext, useContext } from "react";
const StoreContext = createContext(null);
const useStore = () => useContext(StoreContext);

export { StoreContext, useStore };