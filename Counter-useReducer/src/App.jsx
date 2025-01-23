import { useReducer } from "react";
import CounterReducer from "./store/CounterReducer";

function App() {
  const [count, dispatch] = useReducer(CounterReducer, 0);

  return (
    <>
      <div className="container text-center ml-5">
        <h3 className="text-success p-5">{count}</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
