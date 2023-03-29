import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import CreateWallet from "../createWallet/CreateWallet";
import Transaction from "../history/Transaction";

const Dashboard = () => {

    return (
      <>
        {
            localStorage.getItem("iswalletadded") === "true" ? (<Transaction></Transaction>) : (<CreateWallet></CreateWallet>) 
        }
      </>
    );
  
};

export default Dashboard;

