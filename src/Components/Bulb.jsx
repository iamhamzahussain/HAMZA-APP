import React, { useState } from "react";
import { Button } from "@mui/material";
export const Bulb = () => {
  const [data, setData] = useState(0);
  return (
    <div>
      <h1>Bulb</h1>
      <div
        className={data ? "bulbon" : "bulboff"}
        onClick={() => setData(!data)}
      >
        <Button
          variant="contained"
          className="bulbbutton"
          color={data ? "success" : "error"}
        >
          {data ? "Buttonon" : "Buttonoff"}
        </Button>
      </div>
    </div>
  );
};
