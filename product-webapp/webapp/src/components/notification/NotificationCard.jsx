import { Notifications } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import NotificationBar from "./NotificationBar";
import { mockNotification } from "../../data/mockNotification";
import bankImage from "../../assets/Wallet-bro.png";
import AddIcon from '@mui/icons-material/Add';
const NotificationCard = () => {

  const notification=false;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
     backgroundColor="white"
          overflow="auto"
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid black`}
            backgroundColor="white"
            p={1}
          >
            <Typography
              variant="h3"
              fontWeight="600"
              color="#241C2C"
            >
              Notifications
            </Typography>
    
          <IconButton>
            <Notifications
              sx={{ fontSize: { xs: "22px", sm: "26px" }, color:"gray"}}
            />
          </IconButton>
        </Box>
      {notification==true?(
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
):(<Box sx={{ position: 'relative' }}>
<img src={bankImage} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="No notification"/>
<Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <AddIcon sx={{ fontSize: '48px', color: "grey" }} />
  <Typography variant="h3" sx={{ color: "Red", mt: 1 }}>Add bank</Typography>
</Box>
</Box>
)}
            </Box>
      </Grid>
    </Grid>
  );
};

export default NotificationCard;
