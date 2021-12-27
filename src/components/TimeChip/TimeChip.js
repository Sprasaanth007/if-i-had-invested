import { Chip } from "@mui/material";
import React from "react";

const TimeChip = ({ time, setTime }) => {
  const handleAdd1 = () => {
    setTime(1);
  };

  const handleAdd2 = () => {
    setTime(2);
  };

  const handleAdd3 = () => {
    setTime(3);
  };

  return (
    <div>
      <Chip
        label="1 year ago"
        clickable
        color={time === 1 ? "secondary" : "primary"}
        style={{ margin: "4px" }}
        onClick={() => handleAdd1()}
      />
      <Chip
        label="2 years ago"
        clickable
        color={time === 2 ? "secondary" : "primary"}
        onClick={() => handleAdd2()}
        style={{ margin: "4px" }}
      />
      <Chip
        label="3 years ago"
        clickable
        color={time === 3 ? "secondary" : "primary"}
        onClick={() => handleAdd3()}
        style={{ margin: "4px" }}
      />
    </div>
  );
};

export default TimeChip;
