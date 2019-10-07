import React from "react";
import Stop from "./components/Stop.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Czasy odjazdów</h1>
      <main>
        <Stop name="Chrobrego" stopId="1121" />
        <Stop name="Galeria Bałtycka 06" stopId="1383" />
        <Stop name="Harfowa 02" stopId="1397" />
        <Stop name="Firoga" stopId="1404" />
        <Stop name="Potokowa 01" stopId="1390" />
        <Stop name="Galeria Bałtycka" stopId="1634" />
        <Stop name="Wrzeszcz PKP 03" stopId="114" />
        <Stop name="Wrzeszcz PKP 06" stopId="116" />
      </main>
    </div>
  );
}

export default App;
