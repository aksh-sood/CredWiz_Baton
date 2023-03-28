import { Box, IconButton, Typography, useTheme } from "@mui/material";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CachedIcon from '@mui/icons-material/Cached';

const TransactionBar = (props) => {

  return (
    <Box
      keys={`${props.txId}-${props.key}`}
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid black`}
      p="15px"
      sx={{
        maxWidth: "100%",
        "& > *": {
          flexBasis: "20%",
          marginRight: "20px"
        },
        "@media (max-width: 600px)": {
          "& > *": {
            maxWidth: "100%",
            marginRight: 0
          }
        }
      }}
    >
      <Box>
        <Typography  color="#241C2C">
          {props.name}
        </Typography>
      </Box>
      <Box  color="#241C2C">{props.date}</Box>
      <Box  color="#241C2C">₹{props.cost}</Box>
      <Box>
        <IconButton>
          {props.type === "Credit" ? (
            <KeyboardDoubleArrowDownIcon sx={{ color: "white", backgroundColor: "green", fontSize: "28px" }} />
          ) : (
            <KeyboardDoubleArrowUpIcon sx={{ color: "white", backgroundColor: "red", fontSize: "28px" }} />
          )}
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          {props.status === "Successful" ?
            (<CheckCircleIcon sx={{ color: "white", backgroundColor: "green", fontSize: "28px" }} />)
            : (props.status === "failed" ? (<CancelIcon sx={{ color: "white", backgroundColor: "red", fontSize: "28px" }} />) :
              (<CachedIcon sx={{ backgroundColor: "yellow", fontSize: "28px" }} />))
          }
        </IconButton>
      </Box>
    </Box>
  );
};

export default TransactionBar;
