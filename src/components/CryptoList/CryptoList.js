import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CryptoList = ({ stock, setStock }) => {
  const handleChange = (event) => {
    setStock(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Cryptocurrency Name
        </InputLabel>
        <Select
          value={stock}
          label="Cryptocurrency Name"
          onChange={handleChange}
        >
          <MenuItem value={"BTC"}>Bitcoin</MenuItem>
          <MenuItem value={"ETH"}>Ethereum</MenuItem>
          <MenuItem value={"MATIC"}>Matic</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CryptoList;
