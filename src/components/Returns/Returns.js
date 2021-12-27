import { Button } from "@mui/material";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import "./Returns.css";

const Returns = ({ returns, stock }) => {
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState("block");
  setTimeout(() => {
    setLoading(false);
    setDisplay("none");
  }, 5000);

  const invested_money = (returns[1] / returns[0]) * 100;

  return (
    <div>
      <Loader speed={3} customText="Calculating Returns!!" display={display} />
      {returns && !loading ? (
        <div className="returns-container">
          <div>
            <span>Asset Selected:</span> {stock}
          </div>
          <div>
            <span>Invested Amount:</span> {Math.round(invested_money)} Rs
          </div>
          <div>
            <span>Profit made:</span> {Math.round(returns[1])} Rs
          </div>
          <div>
            <span>Total value of Investment:</span>{" "}
            <div className="profit-green">
              {Math.round(returns[1] + invested_money)} Rs
            </div>
          </div>
          <div>
            <span>Profit percentage:</span>{" "}
            <div className="profit-green">{Math.round(returns[0])} %</div>
          </div>
          <br />
          <Button
            variant="contained"
            onClick={() => document.location.reload(true)}
          >
            Calculate Again!!
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Returns;
