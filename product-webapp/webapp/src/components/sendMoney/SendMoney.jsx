import { Box, TextField, MenuItem, Button, Typography } from "@mui/material"
import { width } from "@mui/system"
import Navbar from "../navbar/Navbar"
import "./SendMoney.css"
import Footer from "../footer/Footer"
import InputAdornment from "@mui/material/InputAdornment"


const SendMoney = () => {
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    paddingTop: '20px'
                }} >Send Money</Typography>
                </Box>
            <div className="sendbody">
                <div className="sendimage"></div>
                <div className="sendform">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '80%', backgroundColor: "white", borderRadius: "20px", "& label": { color: "#AEAE50" } },
                            // border: '1px solid #aaaaaa',
                            paddingTop: '20px',
                            borderRadius: '20px',
                            // boxShadow: 3,
                            textAlign:"center",
                            width: '60%',
                            height:"auto",
                            background: '#241C2C'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Amount"
                                type="number"
                                variant="filled"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-inr" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Category"
                                variant="filled">
                                <MenuItem key={"Food"} value={"Food"}>
                                    Food
                                </MenuItem>
                                <MenuItem key={"House"} value={"House"}>
                                    House
                                </MenuItem>
                                <MenuItem key={"Medical"} value={"Medical"}>
                                    Medical
                                </MenuItem>
                            </TextField>
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Note"
                                type="text"
                                multiline
                                variant="filled"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-book" />
                                            {/* <i class="fa-solid fa-files"></i> */}

                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            paddingBottom:"50px"
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
                                SEND
                            </Button>
                        </Box>

                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default SendMoney