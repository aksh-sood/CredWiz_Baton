import { Box, TextField, MenuItem, Button, Typography, LinearProgress } from "@mui/material"
import { width } from "@mui/system"
import Navbar from "../navbar/Navbar"
// import Navsample from "../sampleNav/sampleNav"
import "./AddMoney.css"
import InputAdornment from "@mui/material/InputAdornment"
import React from "react"


const AddMoney = () => {
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    paddingTop: '20px',
                }} >Add Money</Typography>
            </Box>

            <div className="addbody">
                <div className="addimage"></div>
                <div className="addform">
                    <Box
                        sx={{
                            "& .MuiTextField-root": {
                                m: 2,
                                width: "80%",
                                backgroundColor: "white",
                                borderRadius: "20px",

                            },
                            width: "60%",
                            height: "100%",
                            paddingTop: "20px",
                            background: "#241c2c",
                            borderRadius: "20px",
                            textAlign: "center"
                        }}
                    >
                        <div>
                            <TextField
                                autoComplete="off"
                                variant="filled"
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-user" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                            <TextField
                                autoComplete="off"
                                variant="filled"
                                placeholder="First Name"
                                type="text"
                                name="secondName"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-user" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            paddingBottom: "50px"
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
                                ADD
                            </Button>
                        </Box>

                    </Box>
                </div>
            </div >
            {/* </div> */}
        </>
    )
}
export default AddMoney