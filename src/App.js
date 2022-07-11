import "./App.css";
import Filter from "./components/Filter";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Grid />
      <Person />
    </div>
  );
}

export default App;
