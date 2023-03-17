import { mockTransactions } from "../../data/mockData";
import { Box, Typography, useTheme } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StatBox from "../statebox/StatBox";
import TransactionBar from "../history/TransactionBar";
export default function Transaction() {
  const theme = useTheme();
  return (
    <Box p="20px" sx={{ backgroundColor: " #d2dae0" }} >



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