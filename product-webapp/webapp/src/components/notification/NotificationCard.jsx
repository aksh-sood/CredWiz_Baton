import { Notifications } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import NotificationBar from "./NotificationBar";
import { mockNotification } from "../../data/mockNotification";
const NotificationCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
                mb="15px"
            >
                <Box>
                    <Typography
                        variant="h2"
                        fontWeight="600"
                        color={colors.grey[100]}
                    >
                        Notifications
                    </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <Notifications
                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                        />
                    </IconButton>
                </Box>
            </Box>

            {
                mockNotification.map((transaction, i) => (

                    <NotificationBar
                        key={i}
                        id={transaction.id}
                        data={transaction.name}
                        email={transaction.email}
                        message={transaction.message}
                    />
                ))
            }
        </Box>
    )
}
export default NotificationCard;