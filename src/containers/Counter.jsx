import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  inc,
  dec,
  incByNum,
  reset,
  hadleChange,
  decByNum,
} from "../reducers/Counter";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const num = useSelector((state) => state.counter.num);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="text-center mt-10 flex gap-5 items-center justify-center">
        <Button onClick={() => dispatch(decByNum())} variant="contained">
          - {num}
        </Button>
        <TextField
          onChange={(e) => dispatch(hadleChange(+e.target.value))}
          value={num}
          variant="standard"
          size="small"
          label="increment by num"
        />
        <Button onClick={() => dispatch(incByNum())} variant="contained">
          + {num}
        </Button>
      </div>
      <div className="flex justify-center mt-20 gap-5 ">
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch(inc())}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => dispatch(reset())}
        >
          reset
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(dec())}
        >
          -
        </Button>
      </div>
      <div className=" text-center text-[50px]">{value}</div>
    </div>
  );
};

export default Counter;
