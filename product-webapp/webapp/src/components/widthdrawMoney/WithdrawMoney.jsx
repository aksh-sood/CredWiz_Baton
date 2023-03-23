import { Box, TextField, MenuItem, Button, Typography } from "@mui/material"
import { width } from "@mui/system"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"
import "./WithdrawMoney.css"

const WithdrawMoney = () => {
    return (
        <>
        <Navbar></Navbar>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    paddingTop: '20px'
                }} >Withdraw Money</Typography>
                </Box>
            <div className="withdrawbody">
                <div className="withdrawimage"></div>
                <div className="withdrawform">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '80%', backgroundColor: "white", borderRadius: "20px", "& label": { color: "#AEAE50" } },
                            // border: '1px solid #aaaaaa',
                            paddingTop: '20px',
                            borderRadius: '10px',
                            // boxShadow: 3,
                            width: '60%',
                            height: "auto",
                            textAlign:"center",
                            background: '#241C2C'
                        }}
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Account No."
                                type="text"
                                variant="filled"
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Amount"
                                type="number"
                                multiline
                                variant="filled"
                            />
                        </div>
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '50px',
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
                                WITHDRAW
                            </Button>
                        </Box>

                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default WithdrawMoney