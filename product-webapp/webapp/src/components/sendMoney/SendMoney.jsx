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

const styles = {
    resize: {
        fontSize: 50
    }
}

const SendMoney = (props) => {

    const sendmoneySchema = yup.object(
        {
            amount: yup.number().positive("Invalid Input").required("Enter the amount"),
            recipientphonenumber: yup.number().required("Enter phone number")
        }
    )

    const sendmoneyFormik = useFormik(
        {
            initialValues: {
                amount: "",
                recipientphonenumber: ""
            },
            validationSchema: sendmoneySchema
        }
    )

    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const moneystatus = true;


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
                                type="number"
                                variant="filled"
                                name="recipientphonenumber"
                                onChange={sendmoneyFormik.handleChange}
                                value={sendmoneyFormik.values.recipientphonenumber}
                                error={sendmoneyFormik.touched.recipientphonenumber && Boolean(sendmoneyFormik.errors.recipientphonenumber)}
                                helperText={sendmoneyFormik.touched.recipientphonenumber ? sendmoneyFormik.errors.recipientphonenumber : ""}
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
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    height: 'auto',
                                    width: 'auto',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: 'background.paper',
                                    border: '2px solid #000',
                                    boxShadow: 24,
                                    p: 4,
                                }}>
                                    {
                                        moneystatus === true ? (<>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Money sent Successfully
                                            </Typography>
                                            <div className='sendstatus'>
                                                <img src={GreenCheck} height="180vh" width="180vh" />
                                            </div>
                                        </>
                                        ) : (
                                            <>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    Money is not send
                                                </Typography>
                                                <div className='sendstatus'>
                                                    <img src={RedCross} height="180vh" width="180vh" />
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