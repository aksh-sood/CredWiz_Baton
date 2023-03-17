import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { Link } from "react-router-dom";
import TransactionBar from "./TransactionBar";

const TransactionCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          backgroundColor={colors.primary[400]}
          overflow="auto"
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p={1}
          >
            <Typography color={colors.grey[100]} variant="h2" fontWeight="600">
              Recent Transactions
            </Typography>
            <Link color="white" to="/transaction">Show more</Link>
          </Box>
          <Box>
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
      </Grid>
    </Grid>
  );
}

export default TransactionCard;
