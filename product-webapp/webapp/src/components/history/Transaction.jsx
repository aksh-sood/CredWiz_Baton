import React, { useState, useEffect } from "react";
import { mockTransactions } from "../../data/mockData";
import { Box, Button, Typography, useTheme } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StatBox from "../statebox/StatBox";
import TransactionBar from "../history/TransactionBar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import TransactionHistory from "../../Services/TransactionHistory";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [user,setUser]=useState();
  const [wallet,setWallet]=useState();
  useEffect(() => {
    // const navigate = useNavigate()
    const fetchTransactions = async () => {
      const service = new TransactionHistory();
      const transactionHistory = await service.getTransactionHistory();
      setTransactions(transactionHistory);
      console.log(transactionHistory);
    };
    fetchTransactions();

    const jwtToken = localStorage.getItem('jwt_auth');
    fetch(`http://localhost:9090/user/contact/${localStorage.getItem("contactNumber")}`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }).then(response => response.json())
        .then(user => {
          console.log(user);
          setUser(user)
            localStorage.setItem("userName",user.userName);
        })
        .catch(error => {alert("Error fetching userName")});

        axios.get(`http://localhost:9090/wallet/getWallet/${localStorage.getItem("contactNumber")}`)
        .then((res)=>{
          setWallet(res.data);
            localStorage.setItem("accBalance",`${res.data.balance}`)
            localStorage.setItem("iswalletadded",true)
            console.log(localStorage.getItem("iswalletadded"));
           
        })
        .catch((res)=>{
            localStorage.setItem("iswalletadded",false)
            console.log(res)


        })
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
            subtitle={localStorage.getItem("userName")}
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
            subtitle={localStorage.getItem("accBalance")}
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