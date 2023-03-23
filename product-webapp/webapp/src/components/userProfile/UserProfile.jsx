import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import Navbar from "../navbar/Navbar";
import './UserProfile.css';

const UserProfile = () => {
    return (
        <>
        <Navbar></Navbar>
            <Box sx={{ marginTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    
                }} >User Profile</Typography></Box>
                <Box sx={{ paddingTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{
                    fontWeight:'normal',
                    fontStyle: 'italic',
                    color:'GrayText'
                    
                }} >“To become wealthy, you have to be making money while you sleep”</Typography></Box>
            <div className="userprofileBody">
                {/* <div className="userprofileImage"></div> */}
                <div className="userprofileForm">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m:3,width:{
                                    xs:"20ch",
                                    sm:"28ch",
                                    md:"35ch",
                                    lg:"42ch",
                                    xl:"45ch"
                            },
                             background: 'white' ,borderRadius: "20px", margin: "5%" },
                            '& #address': { width: '50ch' },
                            backgroundColor: "#241c2c",
                            borderRadius: "20px",
                            paddingTop:"30px",
                            textAlign:"center",

                        }}
                        noValidate
                        autoComplete="off"
                        width= "60%"
                        height= "100%"
                    >
                        <div> 
                            <TextField id="outlined-basic" disabled label="First Name" variant="outlined" />
                            <TextField id="outlined-basic" disabled label="Last Name" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" disabled label="DOB(MM/DD/YYYY)" variant="outlined" />
                            <TextField id="outlined-basic" disabled label="PAN" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" disabled label="Mobile Number" variant="outlined" />
                            <TextField id="outlined-basic" disabled label="Gender" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" disabled label="Email" variant="outlined" />
                            <TextField id="outlined-basic" disabled label="Marital Status" variant="outlined" />
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
                    </Box>
                </div>
            </div>
           
        </>
    );
}
export default UserProfile;