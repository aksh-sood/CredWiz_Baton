import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../statebox/StatBox";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationCard from "../notification/NotificationCard";
import TransactionCard from "../history/TransactionCard";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (

    <Box m="20px" >

      {/* HEADER */}
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
        <Box mb={{ xs: '20px', sm: '30px' }} mr={{ xs: 0, sm: '30px' }}>
          <Typography
            variant={{ xs: 'h3', sm: 'h2' }}
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
          Welcome to Dashboard
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">

          <IconButton type="button" sx={{ p: 1, display: { xs: 'inline-flex', sm: 'none' } }}>
            <SearchIcon />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

          {/* Icon for changing mode */}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

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
        <Box
          gridColumn={{ xs: '1', sm: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            subtitle="12,361"
            title="Balance"
            icon={
              <AccountBalanceIcon
                sx={{ color: colors.greenAccent[600], fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: '1', sm: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            subtitle="431,225"
            title="Funds Transfered"
            icon={
              <CurrencyExchangeIcon
              sx={{ color: colors.greenAccent[600], fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: '1', sm: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            subtitle="1000"
            title=""
            icon={
              <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: '1', sm: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            subtitle="1,325,134"
            title=""
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: { xs: '20px', sm: '28px' } }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

        <Box
          gridColumn="span 9"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <TransactionCard />
        </Box>
        <Box
          gridColumn="span 3"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <NotificationCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

