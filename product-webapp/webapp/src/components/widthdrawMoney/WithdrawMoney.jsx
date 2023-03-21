import { Box, TextField, MenuItem, Button, Typography } from "@mui/material"
import { width } from "@mui/system"
import "./WithdrawMoney.css"

const WithdrawMoney = () => {
    return (
        <>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    paddingTop: '50px'
                }} >Withdraw Money</Typography>
                <Typography variant="h6" sx={{
                    fontWeight: 'bolder',
                    paddingTop: '50px'
                }} >Too many people spend money they earned..to buy things they don't want..to impress people that they don't like.</Typography>
                </Box>
            <div className="withdrawbody">
                <div className="withdrawimage"></div>
                <div className="withdrawform">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 3, width: '35ch', backgroundColor: "#e7e7e8", borderRadius: "4px", "& label": { color: "#AEAE50" } },
                            border: '1px solid #aaaaaa',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: 3,
                            width: '400px',
                            backgroundColor: '#241C2C'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Account No."
                                type="text"
                                variant="outlined"
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Amount"
                                type="number"
                                multiline
                                variant="outlined"
                            />
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
                                WITHDRAW
                            </Button>
                        </Box>

                    </Box>
                </div>
            </div>
        </>
    )
}
export default WithdrawMoney