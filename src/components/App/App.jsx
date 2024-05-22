import { Cards } from "../Cards/Cards";
import { Header } from "../Header/Header";
import { Helps } from "../Helps/Helps";
// import { Main } from "../Main/Main";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Cards />
      <Helps />
      <Cards />
      {/* <Main /> */}
    </div>
  );
}

export default App;
