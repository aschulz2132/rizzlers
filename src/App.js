import "./styles.css";
import { useState, onMount, useEffect } from "react";

export default function App() {
  const [bruh, setBruh] = useState(false);
  const [count, setCount] = useState(0);
  function pee() {
    navigator.clipboard.writeText("mc.rizzlers.org");
  }

  function flip() {
    let e = bruh;
    let y = !e;
    setBruh(y);
  }
  useEffect(() => {
    setInterval(() => {
      flip();
    }, 1000);
  }, [flip]);
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
