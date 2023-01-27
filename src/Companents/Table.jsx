import { Button, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { addTr, deleteTr, allDeteled, editTr } from "../reducers/Table";

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

function Table() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const tr = useSelector((state) => state.table.tr);
  console.log(tr);

  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  // Edit UseState
  const [editName, setEditName] = useState("");
  const [editCourse, setEditCourse] = useState("");
  const [editEmail, setEditEmail] = useState("");
  // modal EDIT
  const [open, setOpen] = React.useState(false);
  const handleOpen = (obj, i) => {
    setEditName(obj.name);
    setEditCourse(obj.course);
    setEditEmail(obj.email);
    setIndex(i);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* modal EDIT */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex flex-col">
              <Typography sx={{ textAlign: "center" }}>EDIT VALUE</Typography>
              <TextField
                onChange={(e) => setEditName(e.target.value)}
                label="Name"
                variant="standard"
                value={editName}
              />
              <TextField
                onChange={(e) => setEditCourse(e.target.value)}
                label="Course"
                variant="standard"
                value={editCourse}
              />
              <TextField
                onChange={(e) => setEditEmail(e.target.value)}
                label="E-mail"
                variant="standard"
                value={editEmail}
              />
              <Button
                onClick={() => {
                  dispatch(
                    editTr({
                      obj: {
                        ...tr,
                        name: editName,
                        course: editCourse,
                        email: editEmail,
                      },
                      index,
                    })
                  );
                }}
                color="inherit"
                variant="contained"
              >
                save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <h1>Counter: {count}</h1>
      <div className="flex justify-evenly">
        <div className=" flex flex-col md:w-[20%]">
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Name"
            variant="standard"
            size="small"
          />
          <TextField
            onChange={(e) => setCourse(e.target.value)}
            value={course}
            label="Course"
            variant="standard"
            size="small"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="E-mail"
            variant="standard"
            size="small"
          />
          <Button
            onClick={() => {
              if (name.trim() !== "" && course.trim() !== "" && email.trim) {
                dispatch(addTr({ name: name, course: course, email: email }));
              }
              setName("");
              setEmail("");
              setCourse("");
            }}
            variant="contained"
            size="small"
          >
            add user
          </Button>
        </div>
        <table className=" md:w-[50%] overflow-auto mb-40 ">
          <caption className="flex justify-center">
            <div className="font-bold">TABLE USER</div>
            <button className="ml-10">
              All <DeleteIcon onClick={() => dispatch(allDeteled())} />
            </button>
          </caption>
          <thead className="bg-blue-600 text-white rounded-t-2xl md:text-[20px] grid grid-cols-5 md:gap-5 md:px-5 py-3">
            <td className="m-auto">id</td>
            <td className="m-auto">Name</td>
            <td className="m-auto">Course</td>
            <td className="m-auto">E-mail</td>
            <td className="m-auto">Actions</td>
          </thead>
          <tbody className=" border-b-[3px] bg-slate-300  overflow-auto border-blue-600">
            {tr.map((e) => {
              return (
                <tr
                  key={e.id}
                  className=" md:text-[20px] bg-slate-200 hover:bg-slate-100 cursor-pointer my-[1px] font-extralight grid grid-cols-5 md:gap-5 md:px-5 py-2"
                >
                  <td className="m-auto">{e.id}</td>
                  <td className="m-auto">{e.name}</td>
                  <td className="m-auto">{e.course}</td>
                  <td className="m-auto">{e.email}</td>
                  <td className="m-auto">
                    <IconButton>
                      <AutoFixNormalIcon onClick={() => handleOpen(e)} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon
                        color="error"
                        onClick={() => dispatch(deleteTr(e.id))}
                      />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
