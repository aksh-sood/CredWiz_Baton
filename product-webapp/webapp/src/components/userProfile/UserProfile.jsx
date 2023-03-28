import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import Navbar from "../navbar/Navbar";
import './UserProfile.css';
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";
import NavbarWallet from "../createWallet/NavbarWallet";
import { shadows } from '@mui/system';


const iswalletadded = false
function deleteUser() {
    const contactNumber =localStorage.getItem("contactNumber");

    axios.delete(`http://localhost:8090/user/delete/${contactNumber}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            // Handle error
            console.log(error);
        });
}
const UserProfile = () => {
    localStorage.setItem("contactNumber",9876543210);
   // localStorage.setItem("jwt_auth","eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5ODc2NTQzMjEwIiwiZXhwIjoxNjc5OTk4NzU3LCJpYXQiOjE2Nzk5OTY5NTd9.KfwM-w9k0Wgx7f7BiaGpNXKxpjewZh9HcP9OBFWAMzk");
    const jwtToken = localStorage.getItem('jwt_auth');
     fetch(`http://localhost:8090/user/contact/${localStorage.getItem("contactNumber")}`, {
   // fetch(`https://58f152ea-bd1a-46f8-9592-aae49ff1e53c.mock.pstmn.io/user/userprofile`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }).then(response => response.json())
        .then(user => {
            console.log(user.userName,user.address,user.emailId,user.contactNumber)
            document.getElementById('userName').value = user.userName;
            document.getElementById('address').value = user.address;
            document.getElementById('emailId').value = user.emailId;
            document.getElementById('contactNumber').value = user.contactNumber;
        })
        .catch(error => console.error(error));
     fetch(`localhost:9092/wallet/getWallet/${localStorage.getItem("contactNumber")}`)
   // fetch(`https://58f152ea-bd1a-46f8-9592-aae49ff1e53c.mock.pstmn.io/wallet/getwallet`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('aadharNumber').value = user.aadhaarNumber;
            document.getElementById('panNumber').value = user.panNumber;
            document.getElementById('bankName').value = user.bankName;
            document.getElementById('accountNumber').value = user.accountNumber;
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
                            <TextField id="userName" multiline disabled  variant="outlined" />
                            <TextField id="address" multiline disabled maxRows={4}  variant="outlined" />
                        </div>
                        <div>
                            <TextField id="contactNumber" disabled variant="outlined" />
                            <TextField id="emailId" disabled  variant="outlined" />
                        </div>
                        <div>
                            <TextField id="bankName" disabled  variant="outlined" />
                            <TextField id="accountNumber" disabled variant="outlined" />
                        </div>
                        <div>
                            <TextField id="panNumber" disabled  variant="outlined" />
                            <TextField id="aadharNumber" disabled  variant="outlined" />
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
                                onClick="deleteUser()"
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