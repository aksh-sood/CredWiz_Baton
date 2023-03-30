import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./UserProfile.css";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import NavbarWallet from "../createWallet/NavbarWallet";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";

const iswalletadded = false;

const UserProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  //   if (isLoggedIn != true) {
  //     navigate("/signin");
  //   }
  const jwtToken = localStorage.getItem("jwt_auth");

  function deleteUser() {
    const contactNumber = localStorage.getItem("contactNumber");
    axios
      .delete(`http://localhost:8090/user/delete/${contactNumber}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        alert("User deleted successfully");
        localStorage.clear();
        navigate("/signup");
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  useEffect(() => {
    fetch(
      `http://localhost:9090/user/contact/${localStorage.getItem(
        "contactNumber"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((user) => {
        console.log(
          user.userName,
          user.address,
          user.emailId,
          user.contactNumber
        );
        document.getElementById("userName").value = user.userName;
        document.getElementById("address").value = user.address;
        document.getElementById("emailId").value = user.emailId;
        document.getElementById("contactNumber").value = user.contactNumber;
      })
      .catch((error) => {
        alert("You have been loggged out");
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/signin");
      });

    fetch(
      `http://localhost:9090/wallet/getWallet/${localStorage.getItem(
        "contactNumber"
      )}`
    )
      .then((response) => response.json())
      .then((user) => {
        document.getElementById("aadhaarNumber").value = user.aadhaarNumber;
        document.getElementById("panNumber").value = user.panNumber;
        document.getElementById("bankName").value = user.bankName;
        document.getElementById("accountNumber").value = user.accountNumber;
      })
      .catch((error) => {
        alert(" sorry something went wrong");
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/signin");
      });
  });
  return (
    <>
      {" "}
      {localStorage.getItem("iswalletadded") === "true" ? (
        <Navbar></Navbar>
      ) : (
        <NavbarWallet></NavbarWallet>
      )}
      <Box sx={{ marginTop: "25px", width: "100%", textAlign: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bolder",
          }}
        >
          User Profile
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "15px", width: "100%", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontStyle: "italic",
            color: "GrayText",
          }}
        >
          “To become wealthy, you have to be making money while you sleep”
        </Typography>
      </Box>
      <div className="userprofileBody">
        <div className="userprofileForm">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 3,
                width: {
                  xs: "20ch",
                  sm: "28ch",
                  md: "35ch",
                  lg: "42ch",
                  xl: "45ch",
                },
                boxShadow: 3,
                background: "white",
                borderRadius: "20px",
                margin: "1%",
              },
              "& #address": { width: "50ch" },
              backgroundColor: "#241c2c",
              borderRadius: "20px",
              paddingTop: "40px",
              textAlign: "center",
            }}
            noValidate
            autoComplete="off"
            width="60%"
            height="100%"
          >
            <div>
              <TextField
                id="userName"
                label="User Name"
                multiline
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-user" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                id="address"
                label="Address"
                multiline
                maxRows={4}
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-house" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="contactNumber"
                label="Contact Number"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-phone" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                id="emailId"
                label="Email ID"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-envelope" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="bankName"
                label="Bank Name"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-bank" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                id="accountNumber"
                label="Account No."
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-lock" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </div>
            <div>
              <TextField
                id="panNumber"
                label="PAN No."
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-lock" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                id="aadhaarNumber"
                label="Aadhaar No."
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-lock" />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </div>

            <Box
              sx={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <Button
                type="submit"
                className="btn bubble "
                id="sign-in-btn"
                value="Sign up"
                href="/updateUser"
                // color="#241C2C"
                sx={{
                  backgroundColor: "#241C2C",
                  color: "#AEAE50",
                  border: "2px solid #AEAE50",
                  borderRadius: "20px",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "#AEAE50",
                    color: "#241C2C",
                    border: "2px solid #241C2C",
                  },
                }}
              >
                Click Here to Update Your Profile
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            ></Box>
          </Box>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default UserProfile;
