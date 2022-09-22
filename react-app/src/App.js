import "./App.css";

import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartContainer from "./containers/CartContainer";
import ShopProvider from "./context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/results/:resultsId" element={<ItemListContainer />} />
          <Route
            path="/detail/:characterId"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
