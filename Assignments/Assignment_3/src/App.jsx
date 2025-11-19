import { useState } from "react";
import Login from "./components/Login";
import CardList from "./components/CardList";
import ProductDetail from "./components/ProductDetail";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selected, setSelected] = useState(null);

  if (!loggedIn) return <Login onLogin={setLoggedIn} />;

  if (selected)
    return <ProductDetail product={selected} onBack={() => setSelected(null)} />;

  return <CardList onSelect={setSelected} />;
}
