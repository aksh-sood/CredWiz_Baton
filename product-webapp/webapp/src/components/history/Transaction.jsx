import { mockTransactions } from "../../data/mockData";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StatBox from "../statebox/StatBox";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import TransactionBar from "../history/TransactionBar";
export default function Transaction() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const colorMode = useContext(ColorModeContext);
  return (
    <Box m="20px" >

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="left">
        <Box justifyContent="flex-end">
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
        gridTemplateColumns="repeat(12, 1fr)"
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
      </Box>

      {/* ROW 2 */}

      <Box
        gridColumn="span 9"
        gridRow="span 4"
        backgroundColor={colors.primary[400]}
        overflow="auto"
        mt="15px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h2" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <TransactionBar
            key={i}
            id={transaction.id}
            name={transaction.user}
            cost={transaction.cost}
            date={transaction.date}
            status={transaction.status}
            type={transaction.type}
          />
        ))}
      </Box>
    </Box>


  )
}