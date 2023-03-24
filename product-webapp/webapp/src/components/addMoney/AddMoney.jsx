import { Box, TextField, MenuItem, Button, Typography, LinearProgress } from "@mui/material"
import { width } from "@mui/system"
import Navbar from "../navbar/Navbar"
// import Navsample from "../sampleNav/sampleNav"
import "./AddMoney.css"
import InputAdornment from "@mui/material/InputAdornment"
import React from "react"
import { withStyles } from '@material-ui/core/styles';
import Footer from '../footer/Footer'
import Modal from '@mui/material/Modal';
import GreenCheck from "../../assets/green_checkmark.svg";
import RedCross from "../../assets/red-x-icon.svg"


const styles = {
    resize: {
        fontSize: 50
    }
}

const AddMoney = (props) => {


    const { classes } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const path = RedCross; 



    return (
        <>
            <Navbar></Navbar>
            <Box sx={{ width: '100%', textAlign: 'center', }}>
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
                                "& label": { color: "#AEAE50" }

                            },
                            width: "60%",
                            height: "auto",
                            paddingTop: "20px",
                            background: "#241c2c",
                            borderRadius: "20px",
                            textAlign: "center"
                        }}
                    >
                        <div>
                            <TextField
                                // autoComplete="off"
                                variant="filled"
                                label="Amount"
                                // placeholder="Amount"
                                type="number"
                                name="amount"
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
                                onClick={handleOpen}
                                // color="#241C2C"
                                sx={{
                                    width: "150px",
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
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Money Added Successfully
                                    </Typography>
                                    
                                    <div className='tstatus'>
                                        <img src={path} height="180vh" width="180vh" />
                                    </div>
                                </Box>
                            </Modal>


                        </Box>

                    </Box>
                </div>
            </div >
            <Footer></Footer>
        </>
    )
}
export default withStyles(styles)(AddMoney)