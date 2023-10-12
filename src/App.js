import React from "react";
// import Planets from "./components/Planets";
import { useState } from "react";
import { ModeToggler } from "./components/ModeToggler";
import Child from "./components/Child";
import Message from "./components/Message";
import Advise from "./components/Advise";

function App() {
    const date = new Date()
  const age = 100;
  const isGreen = false;
  

  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState("black");

  const names = [
    { name: "Peter", age: 20 },
    { name: "John", age: 30 },
    { name: "Mary", age: 40 },
  ];
  // example of using conditional rendering
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
  ];

  return (
    <>
      <div className="App">
        <h1 className="Name">{age <= 18 ? "age" : "over"}</h1>
        <div>
          <h1 style={{ color: isGreen ? "green" : "red" }}> Has the color</h1>
        </div>
        {names.map((user) => (
          <div>
            {user.name} {user.age}
          </div>
        ))}

        {/* {planets.map(
          (planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>
        )} */}

        <div>
          <h1>{count}</h1>
          <button
            style={{ height: "30px", width: "50px" }}
            onClick={() => setCount(count + 1)}>
            +
          </button>
          <button
            style={{ height: "30px", width: "50px" }}
            onClick={() => setCount(count - 1)}>
            -
                  </button>
                  <button onClick={() => setCount(0)}>Reset</button>

          {<h1 style={{ color: textColor }}>Lopes 4 life</h1>}

          <button
            style={{ height: "30px", width: "50px" }}
            onClick={() => {
              setTextColor(textColor === "black" ? "red" : "black");
                      }}></button>
                  
                  <ModeToggler />
                  <Child message={date.toLocaleTimeString()} />
                  <Message />
                  <Advise />
        </div>
      </div>
    </>
  );
}

export default App;
