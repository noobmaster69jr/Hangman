import React from "react";
import {createRoot} from "react-dom/client";
import Game from "./components/game";
import './styles/main.scss'
const App = () => (
  <>
    <div>Welcome !</div>
    <Game />
  </>
);

const root = createRoot(document.getElementById("app"))
root.render(<App/>)
