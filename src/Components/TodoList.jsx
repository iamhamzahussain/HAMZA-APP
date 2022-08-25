import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

export const TodoList = () => {
  const [data, setData] = useState([]);
  const [filt, setFilt] = useState([]);
  const [search, setSearch] = useState("");
  // const [datacopy, setDataCopy] = useState([]);
  const [txt, setTxt] = useState("");

  const handleAdd = () => {
    setFilt([txt, ...data]);
    setData([txt, ...data]);
    setTxt("");
  };
  useEffect(() => {
    const result = data.filter((elem) =>
      elem.toUpperCase().includes(search.toUpperCase())
    );
    setFilt(result);
  }, [search]);
  
  const handleDelete = (hamza) => {
    const result = data.filter((item) => item !== hamza);
    setData(result);
    setFilt(result);
  };
  return (
    <React.Fragment>
      <h1>Todo List</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            value={txt}
            onFocus={() => setTxt("")}
            label="Enter Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleAdd}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Search"
            fullWidth
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        {filt.map((item, i) => {
          return (
            <Grid item xs={1}>
              <h2>{item}</h2>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(item)}
              >
                Delete
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
