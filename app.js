import React from "react";
import {createRoot} from "react-dom/client";
import Game from "./components/game";

const App = () => (
  <>
    <div>Hello World !</div>
    <Game />
  </>
);

const root = createRoot(document.getElementById("app"))
root.render(<App/>)
