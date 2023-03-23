// ProductLanding.js
import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";


const features = [
  {
    title: "Send and Receive Money",
    description:
      "The fastest and most convenient way to send and receive money! With just a few taps, you can securely transfer funds to friends and family, split bills, or make payments online. Say goodbye to cash and hello to seamless digital transactions with our reliable and user-friendly payment wallet.",
    imageUrl:
      "https://img.freepik.com/free-vector/pay-by-smart-phone-wallet-transaction-sending-digital-money-money-transferring-digitally-from-one-mobile-phone-another-vector-flat-illustration_1150-58768.jpg?w=2000",
  },
  {
    title: "Add and Withdraw Money",
    description: "Easily manage your finances with our digital payment wallet's 'Add and Withdraw Money' feature! Quickly top up your wallet balance from your bank account or credit card, and withdraw funds to your bank account whenever you need them. Enjoy the freedom and flexibility to use your money wherever and whenever you want, without the hassle of traditional banking.",
    imageUrl: "https://img.freepik.com/free-vector/wallet-concept-illustration_114360-1647.jpg",
  },
  {
    title: "View Transaction History",
    description: "Keep track of your finances and stay organized with our digital payment wallet's 'View Transaction History' feature! This handy tool allows you to easily view your past transactions, including details like date, time, and amount. Whether you need to double-check a payment or simply want to monitor your spending, our transaction history feature makes it simple and convenient. Stay in control of your money and stay informed with our user-friendly digital wallet.",
    imageUrl: "https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149171646.jpg",
  },
  {
    title: "The Dashboard",
    description: "Experience the ultimate convenience with our digital payment wallet's all-in-one dashboard! Get access to all the features mentioned above and more in a single, easy-to-use interface. Check your balance, add or withdraw funds, send or receive money, and view your transaction history, all from one centralized location. Our intuitive dashboard design makes managing your finances a breeze, allowing you to stay on top of your payments and transactions with ease. Say goodbye to juggling multiple apps and accounts, and say hello to streamlined financial management with our all-in-one payment wallet dashboard.",
    imageUrl: "https://img.freepik.com/free-vector/user-panel-business-dashboard_23-2148359901.jpg?w=1380&t=st=1679284883~exp=1679285483~hmac=32abf1db9dc6d21f3a80dc440486cc6765c984a31c97d4e2b7929a7fbea3e9c8",
  },
  // Add more features here...
];

const ProductLanding = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              width: "100%",
              padding: 2,
              margin: (theme) => theme.spacing(2, 0),
              transition: "background-color 0.3s, box-shadow 0.3s",
              "&:hover": {
                backgroundColor: (theme) => theme.palette.action.hover,
                boxShadow: (theme) => theme.shadows[6],
              },
            }}
          >
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={6} md={6} order={index % 2 === 0 ? 1 : 2}>
                <img
                  src={feature.imageUrl}
                  alt={feature.title}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} order={index % 2 === 0 ? 2 : 1}>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default ProductLanding;