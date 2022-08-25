import React from "react";

import { Avatar, ImageList, Link } from "@mui/material";
import { ImageListItem } from "@mui/material/ImageListItem";
import { AvTimer } from "@mui/icons-material";
export const Project1 = () => {
  return (
    <nav className="car">
      <a href="">Home</a>
      <a href="">Services</a>
      <a href="">Gallery</a>
      <a href="">Our Team</a>
      <a href="">Appointment</a>
      <a href="">Contact</a>
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTeFflSADAsbUBwh6csoObDPxKZ5jfZFalYN0VWKWCQOJ29pUOI-lwZycOm-WIQOqfAk&usqp=CAU"
        className="img"
      />
    </nav>
  );
};
