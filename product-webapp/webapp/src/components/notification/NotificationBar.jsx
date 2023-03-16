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

    // custom style for the Modal component
    const customStyles = {
        content: {
            width: '25%', // set the width of the modal
            height: '25%', // set the height of the modal
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

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

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Notifications"
                style={customStyles} // set the custom style
            >
                <Typography
                    color={colors.greenAccent[500]}
                    variant="h2"
                    fontWeight="600"
                    marginLeft="12px"
                >
                    {props.data}
                </Typography>
                <Typography
                    color="black"
                    variant="h5"
                    fontWeight="600"
                    marginLeft="12px"
                >
                    {props.message}
                </Typography>
               
                <Button onClick={toggleModal}>Close</Button>
            </Modal>
        </Box>
    )
}

export default NotificationBar;
