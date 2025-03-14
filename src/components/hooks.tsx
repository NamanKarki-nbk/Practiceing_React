import { useState, useEffect, useRef } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const inputRef = useRef(null);
  //   const initialState = 0;
  //   function countReducer(state, action) {
  //     switch (action.type) {
  //       case "INCREMENT":
  //         return state + 1;
  //       case "DECREMENT":
  //         return state - 1;
  //       case "RESET":
  //         return 0;
  //       default:
  //         break;
  //     }
  //   }

  //   const Counter = () => {
  //     const [jcount, dispatch] = useReducer(countReducer, initialState);
  //   };

  useEffect(() => {
    console.log("Count change vayo");
  }, [count]);

  useEffect(() => {
    inputRef?.current.focus();
  }, []);

  return (
    <div className="flex flex-col justify-center  items-center h-screen bg-blue-100">
      <h1>Count Down Begins</h1>
      <button
        onClick={() => setCount((prevState) => prevState + 1)}
        className="w-30 mt-4 bg-red-100 cursor-pointer border rounded-xl p-2 hover:bg-red-200 duration-300"
      >
        {count}
      </button>
      <input
        type="text"
        className=" mt-4 border border-red-700  text-center cursor-pointer rounded-xl"
        placeholder="Enter your name"
        value={type}
        onChange={(e) => setType(e.target.value)}
        ref={inputRef}
      />
      <p className="w-30 bg-blue-500 border rounded-md p-2 mt-4 text-center">
        You typed: {type}
      </p>

      <button
        className="w-40 mt-4 border rounded-md bg-green-600"
        onClick={() => {
          setCount(0);
          setType("");
        }}
      >
        Reset
      </button>

      {/* <h2>Count:{jcount}</h2>
      <button
        className="w-40 mt-4 border rounded-md bg-green-600"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button> */}
    </div>
  );
};

export default Hooks;
