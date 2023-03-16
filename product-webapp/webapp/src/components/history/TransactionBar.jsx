import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CachedIcon from '@mui/icons-material/Cached';
const TransactionBar = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      
        <Box
        keys={`${props.txId}-${props.key}`}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        p="15px"
      >
        <Box width="20%">
          <Typography color={colors.grey[100]}>
            {props.name}
          </Typography>
        </Box>
        <Box width="20%" color={colors.grey[100]}>{props.date}</Box>
        <Box width="20%" color={colors.grey[100]}>${props.cost}</Box>
        <Box width="20%">
          <IconButton >
            {props.type === "credit" ? (
              <KeyboardDoubleArrowDownIcon sx={{ color: "white", backgroundColor: "green", fontSize: "28px" }} />
            ) : (
              <KeyboardDoubleArrowUpIcon sx={{ color: "white", backgroundColor: "red", fontSize: "28px" }} />
            )}
          </IconButton>
        </Box>
        <Box width="20%">
          <IconButton >
            {props.status === "successful" ?
              (<CheckCircleIcon sx={{ color: "white", backgroundColor: "green", fontSize: "28px" }} />)
              : (props.status === "failed" ? (<CancelIcon sx={{ color: "white", backgroundColor: "red", fontSize: "28px" }} />) :
                (<CachedIcon sx={{ backgroundColor: "yellow", fontSize: "28px" }} />))

            }
          </IconButton>
        </Box>
      </Box>
      
    
    )
}
export default TransactionBar;