import { Button } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Layot() {
  return (
    <div>
      <header>
        <ul className="flex justify-center gap-5 bg-yellow-300 shadow-md py-3">
          <Link className="" to="/Counter">
            <Button variant="contained" color="inherit">
              Counter
            </Button>
          </Link>
          <Link className=" " to="/Table">
            <Button variant="contained" color="inherit">
              Table
            </Button>
          </Link>
          <Link className=" " to="/Todo">
            <Button variant="contained" color="inherit">
              Todo
            </Button>
          </Link>
        </ul>
      </header>
      <Outlet />
      <footer className="container mx-auto fixed bottom-0 w-[100%] bg-yellow-300 shadow-md">
        <h1 className="text-center">FOOTER</h1>
        <ul className="flex justify-center gap-5  py-1">
          <Link className="" to="/Todo">
            <Button variant="contained" color="inherit">Todo</Button>
          </Link>
          <Link className="" to="/Counter">
            <Button variant="contained" color="inherit">Counter</Button>
          </Link>
          <Link className="" to="/Table">
            <Button variant="contained" color="inherit">Table</Button>
          </Link>
        </ul>
      </footer>
    </div>
  );
}

export default Layot;
