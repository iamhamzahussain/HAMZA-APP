import React, { useState } from "react";
import { Grid, TextField, Card, CardContent, Avatar } from "@mui/material";

export const RegForm = () => {
  const { fname, setFname } = useState("");
  const { email, setEmail } = useState("");
  const { address, setAddress } = useState("");
  const { city, setCity } = useState("");
  const { pincode, setPincode } = useState("");
  return (
    <div className="reg1">
      <h1>Registration Form</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <TextField
          label="Name"
          onChange={(e) => setFname(e.target.value)}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address"
          onChange={(e) => setAddress(e.target.value)}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="City"
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Pincode"
          onChange={(e) => setPincode(e.target.value)}
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item xs={6}>
        <h1>User List</h1>
      </Grid>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}></Grid>
            <Avatar
              alt=""
              src="https://media.istockphoto.com/vectors/male-face-avatar-man-with-beard-in-the-suit-shirt-and-necktie-icon-vector-id1180564949?k=20&m=1180564949&s=170667a&w=0&h=nCKMnAmSJfxbJ-a7rT11HXi6adeaOZJVFokOoyZzI-I="
              sx={{ width: 200, height: 200 }}
              className="img"
            />
            <Grid item xs={4}></Grid>
            <Grid item xs={2}></Grid>
            <Grid xs={12} className="txt">
              <h3>
                {fname} {email} {address} {city} {pincode}
              </h3>
            </Grid>
            <Grid item xs={12} className="txt">
              <h4>address</h4>
            </Grid>
            <Grid item xs={12} className="txt">
              <h4>city</h4>
            </Grid>
            <Grid item xs={12} className="txt">
              <h4>pin</h4>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
