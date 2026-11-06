import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { allProducts } from "./productosMock.js";
import { SearchProduct } from "./SearchProduct";
import { Calculadora } from "./Calculadora.jsx";
import { Catalogo } from "./Catalogo.jsx";
import { UseEffectSinArreglo } from "./UseEffectSinArreglo.jsx";
import { UseEffectArregloVacio } from "./UseEffectArregloVacio.jsx";
import { UseEffectVariables } from "./UseEffectVariables.jsx";
import { UseEffectCleanup } from "./UseEffectCleanup.jsx";
import { SearchTermBox } from "./SearchTermBox.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [saludo, setSaludo] = useState("Hola desconocido");

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <h1>Call Api Search</h1>
          <SearchTermBox/>
        </div>
        <UseEffectSinArreglo />
        <UseEffectArregloVacio />
        <UseEffectVariables />
        <UseEffectCleanup />
        <Calculadora />
        <SearchProduct products={allProducts} />
        <label>Count is {count}</label>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => setCount(() => 0)}
        >
          {" "}
          reset
        </button>
      </section>

      <input
        onInput={(evt) => {
          setSaludo(evt.target.value);
        }}
      ></input>

      <h4>{saludo}</h4>
      <div className="ticks"></div>
      <Catalogo products={allProducts} />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
