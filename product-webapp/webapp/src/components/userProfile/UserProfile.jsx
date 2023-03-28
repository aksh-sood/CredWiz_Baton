import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import Navbar from "../navbar/Navbar";
import './UserProfile.css';
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";
import NavbarWallet from "../createWallet/NavbarWallet";
import { shadows } from '@mui/system';


const iswalletadded = false

const UserProfile = () => {
    fetch(`localhost:8090/user/contact/${localStorage.getItem("contactNumber")}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('userName').textContent = user.userName;
            document.getElementById('address').textContent = user.address;
            document.getElementById('email').textContent = user.emailId;
            document.getElementById('contactNumber').textContent = user.contactNumber;
        })
        .catch(error => console.error(error));
    fetch(`localhost:9092/wallet/getWallet/${localStorage.getItem("contactNumber")}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('aadharNumber').textContent = user.aadhaarNumber;
            document.getElementById('panNumber').textContent = user.panNumber;
            document.getElementById('bankName').textContent = user.bankName;
            document.getElementById('accountNumber').textContent = user.accountNumber;
        })
        .catch(error => console.error(error));
    return (
        <> {
            iswalletadded == true ? (<Navbar></Navbar>) : (<NavbarWallet></NavbarWallet>)
        }

            <Box sx={{ marginTop: "25px", width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                }} >User Profile</Typography></Box>
            <Box sx={{ paddingTop: "15px", width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: 'GrayText'
                }} >“To become wealthy, you have to be making money while you sleep”</Typography></Box>
            <div className="userprofileBody">
                <div className="userprofileForm">
                    <Box 
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 3, width: {
                                    xs: "20ch",
                                    sm: "28ch",
                                    md: "35ch",
                                    lg: "42ch",
                                    xl: "45ch"
                                },
                                boxShadow: 3,
                                background: 'white', borderRadius: "20px", margin: "1%"
                            },
                            '& #address': { width: '50ch' },
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
                            <TextField id="userName" multiline disabled label="User Name" variant="outlined" />
                             <TextField id="address" multiline  maxRows={4} label="Address" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="contactNumber" disabled label="Contact No:" variant="outlined" />
                            <TextField id="email" disabled label="Email" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="bankName" disabled label="Bank Name" variant="outlined" />
                            <TextField id="accountNumber" disabled label="Account Number" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="panNumber" disabled label="PAN No:" variant="outlined" />
                            <TextField id="aadharNumber" disabled label="Aadhar No:" variant="outlined" />
                        </div>

                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: "30px"
                        }}>
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
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: "30px"
                        }}>
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
                                Delete Profile                          
                                 </Button>
                            
                        </Box>
                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
export default UserProfile;