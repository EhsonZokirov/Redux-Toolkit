import { Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  allDeteled,
  toggleComlete,
  editTodo,
} from "../reducers/Todos";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const [title, setTitile] = useState("");
  //   modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modal title
  const [text, setText] = useState("");
  const [textEdit, setTextEdit] = useState();
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h1 className="font-extralight text-yellow-300 text-center text-[50px]">TODO List</h1>
      <div className="">
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex gap-5">
              <TextField
                variant="standard"
                color="warning"
                label="EDIT"
                value={textEdit}
                onChange={(e) => setTextEdit(e.target.value)}
              />

              <Button
                onClick={() => {
                  dispatch(
                    editTodo({ obj: { ...editTodo, title: textEdit }, index })
                  );
                  handleClose();
                }}
                variant="contained"
                color="warning"
              >
                save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="flex justify-center gap-5 my-10">
        <TextField
          required
          onChange={(e) => setTitile(e.target.value)}
          size="small"
          variant="standard"
          color="secondary"
          label="Enter your Task"
          value={title}
        />

        <Button
          onClick={() => {
            if (title.trim() !== "") {
              dispatch(addTodo(title));
              setTitile("");
            }
          }}
          size="small"
          variant="contained"
          color="inherit"
        >
          Add
        </Button>
        <Button
          onClick={() => dispatch(allDeteled())}
          size="small"
          variant="contained"
          color="inherit"
        >
          All <DeleteIcon color="error" />
        </Button>
      </div>
      <ul className="overflow-auto h-[50vh] m-auto w-[40%] mb-20">
        {todos.map((e) => {
          return (
            <li
              key={e.id}
              className={`${
                e.completed && "line-through"
              } bg-slate-200 rounded-lg hover:shadow-md text-[20px] cursor-pointer my-2 font-extralight p-2 m-auto grid md:grid-cols-3 items-center gap-5`}
            >
              <input
                className="m-auto"
                type="checkbox"
                value={e.complited}
                onChange={(event) =>
                  dispatch(
                    toggleComlete({ id: e.id, completed: event.target.checked })
                  )
                }
              />
              <h1 className="overflow-auto text-center">{e.title}</h1>
              <div className="m-auto">
                <IconButton color="secondary">
                  <AutoFixNormalIcon
                    onClick={() => {
                      handleOpen();
                      setText(e);
                      setIndex(index);
                      setTextEdit(e.title);
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => dispatch(deleteTodo(e.id))}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
