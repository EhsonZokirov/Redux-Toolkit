import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../counter/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-center my-20 text-[20px] flex justify-center gap-5">
        <Button
          sx={{ border: "1px solid" }}
          color="success"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Button
          sx={{ border: "1px solid" }}
          color="inherit"
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
        <Button
          sx={{ border: "1px solid" }}
          color="error"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className="text-center">
        <span className="text-[50px]">{count}</span>
      </div>

      <div>
        
      </div>
    </div>
  );
}
