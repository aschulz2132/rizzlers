import "./styles.css";
import { useState, onMount, useEffect } from "react";

export default function App() {
  const [bruh, setBruh] = useState(false);
  const [move, setMove] = useState(true);
  const [posX, setPosX] = useState(20);
  const [posY, setPosY] = useState(20);

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
    }, 10000);
  }, [flip]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(
    () => {
      setInterval(() => {
        setPosX(posX + 20);
        setPosY(posY - 20);
      }, 100);
    },
    [posX, posY],
    setPosX,
    setPosY
  );

  let posXstr = "20 " + "px";
  let posYstr = toString(posY) + "px";
  if (bruh) {
    return (
      <div className="purpleBack">
        <div className="green">
          <h1>Rizzlers.org</h1>

          <h5>play</h5>
          <p>click to copy to clipboard</p>
          <div
            style={{
              left: { posXstr },
              top: { posYstr },
              position: "absolute",
            }}
            onClick={pee}
          >
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
          <div
            style={{
              left: { posXstr },
              top: { posYstr },
              position: "absolute",
            }}
            onClick={pee}
          >
            <h3>mc.rizzlers.org</h3>
          </div>
        </div>
      </div>
    );
  }
}
