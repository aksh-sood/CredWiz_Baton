import { Notifications } from "@mui/icons-material";
import { Box, Grid,IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import NotificationBar from "./NotificationBar";
import { mockNotification } from "../../data/mockNotification";

const NotificationCard = () => {
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
          <Typography
            variant={{ xs: "h4", sm: "h2" }}
            fontWeight="600"
            color={colors.grey[100]}
          >
            Notifications
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <Notifications
              sx={{ fontSize: { xs: "22px", sm: "26px" }, color: colors.greenAccent[500] }}
            />
          </IconButton>
        </Box>
      </Box>

      <Box
        overflow={{ xs: "hidden", sm: "auto" }}
        maxHeight={{ xs: "0", sm: "300px" }}
        transition={{ xs: "max-height 0.2s ease-out", sm: "max-height 0.5s ease-in-out" }}
        sx={{
          "& .notification-bar": {
            marginBottom: "10px",
            "&:last-child": {
              marginBottom: "0",
            },
          },
          "@media (max-width: 600px)": {
            maxHeight: "none",
          },
        }}
      >
        {mockNotification.map((notification, i) => (
          <NotificationBar
            key={i}
            id={notification.id}
            data={notification.name}
            email={notification.email}
            message={notification.message}
            className="notification-bar"
          />
        ))}
      </Box>
    </Grid>
    </Grid>
  );
};

export default NotificationCard;
