import "./App.css";
import Layout from "./assets/Layout";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}