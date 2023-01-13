import "./styles.css";
import { useState, onMount } from "react";
import { useEffect } from "react/cjs/react.production.min";

export default function App() {
  const [bruh, setBruh] = useState(false);
  const [count, setCount] = useState(0);
  function pee() {
    navigator.clipboard.writeText("mc.rizzlers.org");
  }
  if (bruh) {
    return (
      <div className="purpleBack">
        <div className="green">
          <h1>Rizzlers.org</h1>

          <h5>play</h5>
          <p>click to copy to clipboard</p>
          <div className="E" onClick={pee}>
            <h3>mc.rizzlers.org</h3>
          </div>
        </div>
      </div>
    );
  }
  if (!bruh) {
    return (
      <div className="greenBack">
        <div className="purple">
          <h1>Rizzlers.org</h1>

          <h5>play</h5>
          <p>click to copy to clipboard</p>
          <div className="E" onClick={pee}>
            <h3>mc.rizzlers.org</h3>
          </div>
        </div>
      </div>
    );
  }
}
