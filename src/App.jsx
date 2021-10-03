import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState();

  const handleScroll = () => setCount(window.pageYOffset);

  return <div className="App"></div>;
}

export default App;
