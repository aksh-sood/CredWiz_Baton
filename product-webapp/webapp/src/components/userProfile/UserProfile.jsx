import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import './UserProfile.css';

const UserProfile = () => {
    return (
        <>
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
                <div className="userprofileImage"></div>
                <div className="userprofileForm">
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
                            <TextField id="outlined-basic" label="DOB(MM/DD/YYYY)" variant="outlined" />
                            <TextField id="outlined-basic" label="PAN" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                            <TextField id="outlined-basic" label="Gender" variant="outlined" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Marital Status" variant="outlined" />
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
                    Click Here to Update
                  </Button>
                        </Box>
                    </Box>
                </div>
            </div>
           
        </>
    );
}
export default UserProfile;