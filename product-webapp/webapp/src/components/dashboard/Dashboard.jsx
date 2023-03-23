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

const Dashboard = () => {
  const isBankAdded = true;
  const isMoneyAdded = false;
  return (
    <>
    <Navbar></Navbar>
    <Box p="25px" sx={{ backgroundColor: "#E7E7E8" }}>

      {/* HEADER */}
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
        <Box mb={{ xs: '20px', sm: '30px' }} mr={{ xs: 0, sm: '30px' }}>
          <Typography
            variant='h2'
            fontWeight="bold"
            sx={{ m: "0 0 5px 0", color: "#241C2C" }}
          >
            Welcome to Dashboard
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">

       
        <IconButton type="button" sx={{ p: 1, display: { xs: 'inline-flex', sm: 'inline-flex' } }}>
            <SearchIcon sx={{ color:"black", fontSize: { xs: '20px', sm: '28px' } }} />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 1, color: "#241C2C" }} placeholder="Search" />


        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(12, 1fr)' }}
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

        {

          isBankAdded == false ? (<Box
            gridColumn={{ xs: '1', sm: 'span 3' }}
            display="flex"
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox

              title="Add Bank"
              icon={
                <AddIcon
                  sx={{ fontSize: { xs: '20px', sm: '28px', color: "#241C2C" } }}
                />
              }
            />
          </Box>) : (
            <Box
              gridColumn={{ xs: '1', sm: 'span 3' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="white"
            >
              <StatBox
                title="Add Money"
                icon={
                  <AddIcon
                    sx={{ fontSize: { xs: '20px', sm: '28px', color: "#241C2C" } }}
                  />
                }
              />
            </Box>)
        }
        {isMoneyAdded == true ? (<Box display="flex"
          gap="20px">
          <Box
            gridColumn={{ xs: '1', sm: 'span 3' }}
            display="flex"
            alignItems="center"
            backgroundColor="white"
            justifyContent="center"
          >
            <StatBox
              subtitle="12,361"
              title="Balance"
              icon={
                <AccountBalanceIcon
                  sx={{ fontSize: { xs: '20px', sm: '28px', color: "#241C2C" } }}
                />
              }
            />
          </Box>
          <Box
            gridColumn={{ xs: '1', sm: 'span 3' }}
            backgroundColor="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              subtitle="431,225"
              title="Funds Transfered"
              icon={
                <CurrencyExchangeIcon
                  sx={{ fontSize: { xs: '20px', sm: '28px', color: "#241C2C" } }}
                />
              }
            />
          </Box></Box>) : (<Box></Box>)}

        {/* ROW 2 */}

        <Box
          gridColumn="span 9"
          gridRow="span 4"
          backgroundColor="white"
          overflow="auto"
        >
          <TransactionCard />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 4"
          backgroundColor="white"
        >
          <NotificationCard />
        </Box>
      </Box>
    </Box>
    <Footer></Footer>
    </>
  );
};

export default Dashboard;

