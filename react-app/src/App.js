import "./App.css";

//import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      {/*<ItemListContainer greeting={"Contador"} />*/}
      <ItemDetailContainer />
      <div className="App"></div>
    </>
  );
}

export default App;
