import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const StocksList = ({ stock, setStock }) => {
  const handleChange = (event) => {
    setStock(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stock Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stock}
          label="Stock Name"
          onChange={handleChange}
        >
          <MenuItem value={"RELIANCE.BSE"}>Reliance</MenuItem>
          <MenuItem value={"DEEPAKNI.BSE"}>Deepak Nitrite</MenuItem>
          <MenuItem value={"TATAMOTORS.BSE"}>Tata Motors</MenuItem>
          <MenuItem value={"INFY.BSE"}>Infosys</MenuItem>
          <MenuItem value={"SBIN.BSE"}>State Bank of India</MenuItem>
          <MenuItem value={"BAJAJFINSV.BSE"}>Bajaj Finserv</MenuItem>
          <MenuItem value={"ASIANPAINT.BSE"}>Asian Paints</MenuItem>
          <MenuItem value={"TECHM.BSE"}>Tech Mahindra</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default StocksList;
