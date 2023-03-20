import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import './UpdateUser.css';

const UpdateUser = () => {
    return (
        <>
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
                            '& .MuiTextField-root': {m:1, width: '25ch' },
                            '& #address': { width: '50ch' }

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Contact No:" variant="outlined" />
                            <TextField id="outlined-basic" label="Email ID" variant="outlined" />
                        </div>
                        <div >
                            <TextField fullWidth id="address" label="Address" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="City" variant="outlined" />
                            <TextField id="outlined-basic" label="State" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Zip Code" variant="outlined" />
                            <TextField id="outlined-basic" label="Country" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                        </div>
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '50px'
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
           
        </>
    );
}
export default UpdateUser;