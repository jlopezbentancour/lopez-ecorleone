import "./App.css";

import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Cart from "./containers/CartContainer";
import ShopProvider from "./context/ShopProvider";

function App() {
  /* useEffect(()=> {
    console.log("Se debería ejecutar una sola vez");
    algoritmoGuardadoAutomático();
  }, []) */
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
