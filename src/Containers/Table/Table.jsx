import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { delete, get, } from "../redusers/redusers";

function Table() {
    const get = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div>
        
    </div>
  )
}

export default Table