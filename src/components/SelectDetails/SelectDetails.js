import React, { useState } from "react";
import "./SelectDetails.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import TimeChip from "../TimeChip/TimeChip";
import calculateReturns from "../../calculateReturns";
import calculateReturnsCrypto from "../../calculateReturnsCrypto";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StocksList from "../StocksList/StocksList";
import Returns from "../Returns/Returns";
import rickrolled from "../../rickrolled.gif";
import CryptoList from "../CryptoList/CryptoList";

const SelectDetails = () => {
  const [stock, setStock] = useState("");
  const [time, setTime] = useState();
  const [returns, setReturns] = useState();
  const [investAmount, setInvestAmount] = useState();
  const [loading, setLoading] = useState(0);
  const [tab, setTab] = useState(1);

  const fetchData1 = async () => {
    setLoading(1);
    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&outputsize=full&apikey=EBOD3PTWN2O9HSD1`
    );
    const Returns = calculateReturns(
      data["Monthly Time Series"],
      time,
      investAmount
    );
    console.log(Returns);
    setReturns(Returns);
  };

  const fetchData2 = async () => {
    setLoading(1);
    const { data } = await axios.get(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=${stock}&market=CNY&apikey=EBOD3PTWN2O9HSD1`
    );
    console.log(stock);
    console.log(data);
    const Returns1 = calculateReturnsCrypto(
      data["Time Series (Digital Currency Monthly)"],
      time,
      investAmount
    );
    console.log(Returns1);
    setReturns(Returns1);
  };

  return (
    <div className="outer__container">
      <div className="details__container">
        <h2>Regret Calculator</h2>
        <br />
        <p>
          Use this calculator to find out how much money you could have made if
          you had invested in a particular asset class. Look at the returns you
          missed and feel free to regret your life decisions.
        </p>
        <br />
        <br />
        <img src={rickrolled} alt="rick-rolled" className="rickrolled-image" />
      </div>
      <div className="select-details-container">
        <div className="circular-background"></div>

        <Tabs>
          <TabList>
            <Tab onClick={() => setTab(1)}>Stocks</Tab>
            <Tab onClick={() => setTab(2)}>Crypto</Tab>
          </TabList>

          <TabPanel>
            <h3 style={{ marginTop: "2.5rem" }}>Select Stock</h3>
            <br />
            <StocksList stock={stock} setStock={setStock} />
          </TabPanel>
          <TabPanel>
            <h3 style={{ marginTop: "2.5rem" }}>Select Cryptocurrency</h3>
            <br />
            <CryptoList stock={stock} setStock={setStock} />
          </TabPanel>
        </Tabs>
        <br />
        {returns && loading === 1 ? (
          <Returns returns={returns} stock={stock} />
        ) : (
          <div className="select-details-inner-container">
            <h3>Enter Amount</h3>
            <br />
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              onChange={(e) => setInvestAmount(e.target.value)}
            />
            <br />
            <br />
            <h3>Investment Date</h3>
            <br />
            <TimeChip time={time} setTime={setTime} />
            <br />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                if (tab === 1) {
                  fetchData1();
                } else if (tab === 2) {
                  fetchData2();
                }
              }}
            >
              Calculate Returns
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDetails;
