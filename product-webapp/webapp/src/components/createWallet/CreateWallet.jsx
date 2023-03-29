import { Box, Button, TextField, Typography } from "@mui/material";
import './CreateWallet.css';
import NavbarWallet from "./NavbarWallet"
import Footer from "../footer/Footer"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { checkUserContact } from "../../Services/userAuthCheck";
import React, { useEffect, useState } from "react";


const CreateWallet = (props) => {
    const navigate=useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        async function checkLoginStatus() {
            const jwtAuth = localStorage.getItem("jwt_auth");
            const result = await checkUserContact(jwtAuth);
            setIsLoggedIn(result);
            console.log("isLoggedIn ", result);
        }
        checkLoginStatus();
    }, []);

    const walletSchema = yup.object(
        {
            bankName: yup.string().matches(/^[a-zA-Z]+$/, 'only alphabets').required("Bank name is required"),
            accountNumber: yup.string().required("Account Number is required"),
            aadhaarNumber: yup.string().required("Aadhaar is required"),
            panNumber: yup.string().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "pan card must be valid").required("Pan number is required")
        });
    const walletFormik = useFormik({
        initialValues: {
            bankName: "",
            accountNumber: "",
            aadhaarNumber: "",
            panNumber: ""
        },
        validationSchema: walletSchema,
        onSubmit: (values) => {
            console.log(values);
            const wallet = {
                bankName: `${values.bankName}`,
                accountNumber: `${values.accountNumber}`,
                aadhaarNumber: `${values.aadhaarNumber}`,
                panNumber: `${values.panNumber}`,
                contactNumber: `${localStorage.getItem("contactNumber")}`
            }
            console.log(wallet);
            axios.post("http://localhost:9090/wallet/createWallet", wallet)
                .then((res) => {
                    localStorage.setItem("iswalletadded",true)
                    alert("updated successful")
                    navigate("/dashboard")
                })
                .catch((res) => {
                    alert(res)
                })
        }
    });
    return (
        <>
        {isLoggedIn ? (
        <>
            <NavbarWallet></NavbarWallet>
            <Box sx={{ marginTop: "50px", width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',

                }} >Create Wallet</Typography></Box>
            <Box sx={{ paddingTop: "50px", width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: 'GrayText'

                }} >Create Wallet to avail our service</Typography></Box>
            <div className="addbankBody">
                <div className="addbankImage"></div>
                <div className="addbankForm">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '70%', background: 'white', borderRadius: "20px", margin: "15px" },
                            '& #address': { width: '50ch' },
                            backgroundColor: "#241c2c",
                            borderRadius: "20px",
                            textAlign: "center",
                            paddingTop: "30px"

                        }}
                        //noValidate
                        autoComplete="off"
                        width="60%"
                        height="auto"
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Bank Name"
                                type="text"
                                variant="filled"
                                name="bankName"
                                onChange={walletFormik.handleChange}
                                value={walletFormik.values.bankName}
                                error={walletFormik.touched.bankName && Boolean(walletFormik.errors.bankName)}
                                helperText={walletFormik.touched.bankName ? walletFormik.errors.bankName : ""}
                            />
                            <TextField
                                id="outlined-basic"
                                type="text"
                                label="Account Number"
                                variant="filled"
                                name="accountNumber"
                                onChange={walletFormik.handleChange}
                                value={walletFormik.values.accountNumber}
                                error={walletFormik.touched.accountNumber && Boolean(walletFormik.errors.accountNumber)}
                                helperText={walletFormik.touched.accountNumber ? walletFormik.errors.accountNumber : ""}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Aadhaar Number"
                                type="text"
                                variant="filled"
                                name="aadhaarNumber"
                                onChange={walletFormik.handleChange}
                                value={walletFormik.values.aadhaarNumber}
                                error={walletFormik.touched.aadhaarNumber && Boolean(walletFormik.errors.aadhaarNumber)}
                                helperText={walletFormik.touched.aadhaarNumber ? walletFormik.errors.aadhaarNumber : ""}
                            />
                            <TextField
                                id="outlined-basic"
                                label="PAN Number"
                                type="text"
                                name="panNumber"
                                variant="filled"
                                onChange={walletFormik.handleChange}
                                value={walletFormik.values.panNumber}
                                error={walletFormik.touched.panNumber && Boolean(walletFormik.errors.panNumber)}
                                helperText={walletFormik.touched.panNumber ? walletFormik.errors.panNumber : ""}
                            />
                        </div>



                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}>
                            <Button
                                type="submit"
                                className="btn bubble "
                                id="sign-in-btn"
                                value="Sign up"

                                onClick={walletFormik.handleSubmit}
                                // color="#241C2C"
                                // marginBottom="20px"
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
                                Create Wallet
                            </Button>
                        </Box>
                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>):(
            <div>
            <p>You are not logged in. Please log in to access this page.</p>
            {/* You can also redirect the user to the login page if needed */}
            {navigate("/signin")}
            </div>
        )}
        </>
    );
}
export default CreateWallet;