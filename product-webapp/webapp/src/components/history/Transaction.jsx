import React, { useState, useEffect } from "react";
import { mockTransactions } from "../../data/mockData";
import { Box, Button, Typography, useTheme } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StatBox from "../statebox/StatBox";
import TransactionBar from "../history/TransactionBar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TransactionHistory from "../../Services/TransactionHistory";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const service = new TransactionHistory();
      const transactionHistory = await service.getTransactionHistory();
      setTransactions(transactionHistory);
      console.log(transactionHistory);
    };
    fetchTransactions();
  }, []);

  const theme = useTheme();
  return (
    <>
    <Navbar></Navbar>
    <Box p="20px" sx={{ backgroundColor: "#E7E7E8" }} >



      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn={{ xs: '3', sm: 'span 3' }}
           backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
          
          <StatBox
            subtitle="Austin George"
            title="User Name"
            icon={
              <AccountBalanceIcon
                sx={{ color:"black", fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>
        {/* ROW 1 */}
        <Box
          gridColumn={{ xs: '3', sm: 'span 3' }}
           backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
          
          <StatBox
            subtitle="12,361"
            title="Balance"
            icon={
              <AccountBalanceIcon
                sx={{ color:"black", fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={{ xs: '3', sm: 'span 3' }}
           backgroundColor="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button>Add Money</Button>
        </Box>
      </Box>

      {/* ROW 2 */}

      <Box
        gridColumn="span 9"
        gridRow="span 4"
             backgroundColor="white"
        overflow="auto"
        mt="15px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid black`}
          colors="white"
          p="15px"
        >
          <Typography  color="#241C2C" variant="h2" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {transactions.map(transaction => (
          <TransactionBar
            key={transaction.transactionId}
            id={transaction.transactionId}
            name={transaction.contactNumber}
            cost={transaction.amount}
            date={new Date(transaction.date).toLocaleString()}
            status={transaction.transactionStatus}
            type={transaction.transactionType}
          />
        ))}
        {/* {transactions.map((transaction, i) => (
          <TransactionBar
            key={i}
            id={transaction.id}
            name={transaction.user}
            cost={transaction.cost}
            date={transaction.date}
            status={transaction.status}
            type={transaction.type}
          />
        ))} */}
      </Box>
    </Box>
    <Footer></Footer>
</>
  )
}