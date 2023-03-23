import { Box, IconButton, Typography, useTheme } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';
import StatBox from "../statebox/StatBox";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import NotificationCard from "../notification/NotificationCard";
import TransactionCard from "../history/TransactionCard";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import Transaction from "../history/Transaction";

const Dashboard = () => {
  const isWalletAdded = true;
  return (
    <>

        {

          isWalletAdded == false ? (<div>hello</div> ): (
         <Transaction/>)
        }
        </>
  );
};

export default Dashboard;

