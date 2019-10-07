import React from "react";
import Stop from "./components/Stop.js";
import "./App.css";

function App() {
  return (
    <>
      <h1>Czasy odjazdów</h1>
      <main>
        <Stop name="Chrobrego" stopId="1121" />
        <Stop name="Galeria Bałtycka" stopId="1383" />
        <Stop name="Firoga" stopId="1404" />
        <Stop name="Galeria Bałtycka" stopId="1634" />
      </main>
    </>
  );
}

export default App;
