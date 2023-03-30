import { Box, IconButton, Typography, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CachedIcon from "@mui/icons-material/Cached";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const TransactionBar = (props) => {
  return (
    <Box
      keys={`${props.txId}-${props.key}`}
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid black`}
      p="15px"
      sx={{
        maxWidth: "100%",
        "& > *": {
          flexBasis: "20%",
          marginRight: "20px",
        },
        "@media (max-width: 600px)": {
          "& > *": {
            maxWidth: "100%",
            marginRight: 0,
          },
        },
      }}
    >
      <Box>
        <Typography color="#241C2C">{props.id}</Typography>
      </Box>
      <Box color="#241C2C">{props.date}</Box>
      <Box>
        <Typography color="#241C2C">{props.name}</Typography>
      </Box>
      <Box>
        <Typography color="#241C2C">
          {props.status === "Successful" && props.receiver === null
            ? `CredWiz Wallet`
            : props.receiver}
        </Typography>
      </Box>

      <Box color="#241C2C">₹{props.cost}</Box>
      <Box>
        <IconButton>
          {props.type === "Credit" ? (
            <ArrowCircleDownIcon
              sx={{
                color: "green",
                fontSize: "28px",
              }}
            />
          ) : (
            <ArrowCircleUpIcon sx={{ color: "red", fontSize: "28px" }} />
          )}
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          {props.status === "Successful" ? (
            <CheckCircleIcon
              sx={{
                color: "green",

                fontSize: "28px",
              }}
            />
          ) : props.status === "Failed" ? (
            <CancelIcon sx={{ color: "red", fontSize: "28px" }} />
          ) : (
            <CachedIcon sx={{ color: "yellow", fontSize: "28px" }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default TransactionBar;
