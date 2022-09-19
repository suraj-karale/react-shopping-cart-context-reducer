import "./App.css";
import Filters from "./components/Filters";

import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filters />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
