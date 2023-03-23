import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import './UpdateUser.css';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"

const UpdateUser = () => {
    return (
        <>
        <Navbar></Navbar>
            <Box sx={{ marginTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    
                }} >Update Profile</Typography></Box>
                <Box sx={{ paddingTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{
                   fontWeight:'normal',
                   fontStyle: 'italic',
                   color:'GrayText'
                    
                }} >“Wealth is the ability to fully experience Life”</Typography></Box>
            <div className="updateBody">
                <div className="updateImage"></div>
                <div className="updateForm">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m:1, width: 'auto' , background: 'white' ,borderRadius: "20px", margin: "5%"  },
                            '& #address': { width: '50ch' },
                            backgroundColor: "#241c2c",
                            borderRadius: "20px",
                            textAlign:"center"
                        }}
                        noValidate
                        autoComplete="off"
                        width= "60%"
                        height= "auto"
                        
                    >
                        <div>
                            <TextField id="outlined-basic" label="First Name" variant="filled" />
                            <TextField id="outlined-basic" label="Last Name" variant="filled" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Contact No:" variant="filled" />
                            <TextField id="outlined-basic" label="Email ID" variant="filled" />
                        </div>
                        <div >
                            <TextField fullWidth id="address" label="Address" variant="filled" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="City" variant="filled" />
                            <TextField id="outlined-basic" label="State" variant="filled" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Zip Code" variant="filled" />
                            <TextField id="outlined-basic" label="Country" variant="filled" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="filled" />
                            <TextField id="outlined-basic" label="Confirm Password" variant="filled" />
                        </div>
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            paddingBottom: '30px'
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
                    Update
                  </Button>
                        </Box>
                    </Box>
                </div>
            </div>
           <Footer></Footer>
        </>
    );
}
export default UpdateUser;