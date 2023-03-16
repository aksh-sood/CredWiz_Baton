import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PersonIcon from '@mui/icons-material/Person';
import Modal from "react-modal";
import { useState } from "react";
const NotificationBar = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (

        <Box
            key={`${props.txId}-${props.key}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
        >
            <Button onClick={toggleModal}>
                <PersonIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
                <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                    marginLeft="12px"
                >
                    {props.data}
                </Typography>
            </Button>
            <Box
                    gridColumn="span 4"
                    gridRow="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                > 
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Notifications"
                gridColumn="span 3"
            >
               <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                    marginLeft="12px"
                >
                        {props.data}
                    </Typography>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                        marginLeft="12px"
                    >
                        {props.message}
                    </Typography>
               
                <button onClick={toggleModal}>Close</button>
            </Modal> </Box>
        </Box>


    )
}
export default NotificationBar;