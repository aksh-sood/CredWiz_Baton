import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
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
            width: { xs: "50%", sm: "25%" }, // set the width of the modal
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
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
        >
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={6}>
                    <Button onClick={toggleModal} fullWidth>
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
                </Grid>
                <Grid item xs={12} md={6}>
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
                        <Box mt={2}>
                            <Button onClick={toggleModal} fullWidth>Close</Button>
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NotificationBar;
