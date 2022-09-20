import "./App.css";

import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Cart from "./containers/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/results/:resultsId" element={<ItemListContainer />} />
        <Route path="/detail/:characterId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
