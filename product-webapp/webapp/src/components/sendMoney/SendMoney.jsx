import React from "react"
import { Box, TextField, Button, Typography } from "@mui/material"
import Navbar from "../navbar/Navbar"
import "./SendMoney.css"
import Footer from "../footer/Footer"
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from "@mui/material/InputAdornment"
import Modal from '@mui/material/Modal'
import GreenCheck from "../../assets/green_checkmark.svg"
import RedCross from "../../assets/red-x-icon.svg"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"


const styles = {
    resize: {
        fontSize: 50
    }
}

const SendMoney = (props) => {

    const sendmoneySchema = yup.object(
        {
            amount: yup.string("Invalid Input").required("Enter the amount"),
            receiverContactNumber: yup.string().required("Enter phone number")
        }
    )

    const sendmoneyFormik = useFormik(
        {
            initialValues: {
                amount: "",
                receiverContactNumber: ""
            },
            validationSchema: sendmoneySchema,
            onSubmit: (values) => {
                // values["contactNumber"]=localStorage.getItem("contactNumber")
                values["senderContactNumber"] = "1111111111"
                console.log(values)
                axios.post("http://localhost:9092/wallet/sendmoney", values)
                    .then((res) => {
                        console.log(res)
                        //  alert(res.data)
                        // {moneystatus=true}
                        localStorage.setItem("moneystatus", true)
                        setOpen(true)
                    })
                    .catch((res) => {
                        //  alert("wrong input")
                        localStorage.setItem("moneystatus", false)
                        setOpen(true)
                        // moneystatus=false
                    })
            }
        }
    )

    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const moneystatus = true;


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
                            textAlign: "center",
                            width: '60%',
                            height: "auto",
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
                                name="amount"
                                onChange={sendmoneyFormik.handleChange}
                                value={sendmoneyFormik.values.amount}
                                error={sendmoneyFormik.touched.amount && Boolean(sendmoneyFormik.errors.amount)}
                                helperText={sendmoneyFormik.touched.amount ? sendmoneyFormik.errors.amount : ""}
                                InputProps={{
                                    classes: { input: classes.resize },
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
                                id="outlined-basic"
                                label="Recipient Phone Number"
                                type="text"
                                variant="filled"
                                name="receiverContactNumber"
                                onChange={sendmoneyFormik.handleChange}
                                value={sendmoneyFormik.values.receiverContactNumber}
                                error={sendmoneyFormik.touched.receiverContactNumber && Boolean(sendmoneyFormik.errors.receiverContactNumber)}
                                helperText={sendmoneyFormik.touched.receiverContactNumber ? sendmoneyFormik.errors.receiverContactNumber : ""}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-phone" />
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
                                onClick={sendmoneyFormik.handleSubmit}
                                // onClick={handleOpen}
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

                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    height: '30%',
                                    width: '30%',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: '#241c2c',
                                    border: '10px solid #aeae50',
                                    boxShadow: 24,
                                    p: 4,
                                }}>
                                    {
                                        localStorage.getItem("moneystatus") === "true" ? (<>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" align="center" color="#aeae50">
                                                Money sent Successfully
                                            </Typography>
                                            <div className='sendstatus'>
                                                <img src={GreenCheck} height="30%" width="30%" />
                                            </div>
                                        </>
                                        ) : (
                                            <>
                                                <Typography id="modal-modal-title" variant="h6" component="h2" align="center" color="#aeae50">
                                                    Money is not Send, check details
                                                </Typography>
                                                <div className='sendstatus'>
                                                    <img src={RedCross} height="30%" width="30%" />
                                                </div>
                                            </>
                                        )
                                    }
                                    <Button onClick={handleClose} sx={{
                                        width: '100%',
                                        textAlign: 'center'
                                    }}>Close</Button>
                                </Box>
                            </Modal>


                        </Box>

                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default withStyles(styles)(SendMoney)