import { useContext, useReducer, useState } from "react";
import "./App.css";
import ProductsItem from "./component/ProductsItem";

function App() {
  const [color, Setcolor] = useState("red");
  const [count, dispatch] = useReducer(reducer, {
    value: 0,
  });
  function reducer(state: any, action: any) {
    // action = { type: "INCREASE", payload: 10}
    if (action.type === "INCREMENT") {
      return { value: state.value + 1 };
    }
    if (action.type === "DECREMENT") {
      return { value: state.value - 1 };
    }
    if (action.type === "INCREASE") {
      return { value: state.value + action.payload };
    }
    return state;
  }
  return (
    <>
      <div>
        Counter: <h1> {count.value}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          DECREMENT
        </button>
        <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
          INCREASE
        </button>
      </div>
      {/* <div
        style={{ width: 200, height: 200, backgroundColor: color }}
        onClick={() => Setcolor(color === "blue" ? "red" : "blue")}
      ></div> */}
      <ProductsItem></ProductsItem>
    </>
  );
}

export default App;
