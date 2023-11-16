import "./App.css";
import { Component } from "react";
import Exemplo from "./Components/Exemplo.jsx";
import Header from "./Components/Header.jsx";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header nome="Morty" />
        <Exemplo />
      </div>
    );
  }
}

export default App;
