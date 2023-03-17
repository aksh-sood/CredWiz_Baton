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
                    fontWeight: 'semi-bold',
                    
                }} >“The principles of wealth are true regarding large amounts and small amounts. It all begins with the smallest unit of currency.”</Typography></Box>
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
                            <Button variant="contained" sx={{
                                textAlign: 'center'
                            }}>UPDATE</Button>
                        </Box>
                    </Box>
                </div>
            </div>
           
        </>
    );
}
export default UpdateUser;