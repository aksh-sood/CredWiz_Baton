import { Box, Button, TextField } from "@mui/material"
import InputAdornment from "@mui/material/InputAdornment"
import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import Logo from "../../assets/logo.png"
import "./SignIn.css"


const SignIn = () => {

    const navigate = useNavigate()

    const signinSchema = yup.object(
        {
            contactNumber: yup.number("Invalid Email").required("Enter the Registered contact number"),
            password: yup.string().required("Enter Password")
        }
    )

    const signinFormik = useFormik(
        {
            initialValues: {
                contactNumber: "",
                password: "",
            },
            validationSchema: signinSchema,
            onSubmit: (values) => {
                console.log(values)
                axios.post("http://localhost:8090/user/login", values)
                    .then((res) => {
                        console.log(res)
                        localStorage.setItem("jwt_auth",res.data.jwt)     
                        console.log(localStorage.getItem("jwt_auth"))
                        localStorage.setItem("contactNumber",values.contactNumber)
                        localStorage.setItem("isloggedin",true)
                        navigate("/dashboard")
                    })
                    .catch((res) => {
                        alert("wrong input")
                    })
            }
        }
    )

    return (
        <>
            <div className="signinbody">
                <div className="leftbody">
                    <div className="leftinnerbody">

                        <div className="leftbodylogo">
                            <Link to="/" height="auto" className="imagelogo">
                                <img src={Logo} alt="logo" href="/" />
                            </Link>
                            <h1 style={{ color: '#AEAE50' }}>New here ?</h1>
                            <p style={{ color: '#AEAE50' }}>
                                Join us to have the best expereince in digital wallet
                                platforms
                            </p>
                            <Button
                                type="submit"
                                className="btn bubble "
                                id="sign-in-btn"
                                value="Sign up"
                                href="/signup"
                                sx={{
                                    width: "20ch",
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
                                Sign Up
                            </Button>
                        </div>
                        <div className="leftbodyimage">
                        </div>
                    </div>
                </div>
                <div className="rightbody">
                    <div className="rightinnerbody">
                        <Box>
                            <h1>Welcome Back!</h1>
                        </Box>
                        <Box
                            className="formbody"
                            display="grid"
                            component="form"
                            sx={{
                                "& .MuiTextField-root": {
                                    m: 2,
                                    backgroundColor: "white",
                                    width: "35ch",
                                    borderRadius: "20px",
                                    "& label": { color: "#AEAE50" }
                                },
                                width: "60%",
                                height: "70%",
                                background: "#241c2c",
                                borderRadius: "20px",
                                justifyContent: "center",
                            }}
                        >
                            <p>&nbsp;</p>
                            <TextField
                                label="Mobile number"
                                autoComplete="off"
                                variant="filled"
                                type="tel"
                                name="contactNumber"
                                onChange={signinFormik.handleChange}
                                value={signinFormik.values.contactNumber}
                                error={signinFormik.touched.contactNumber && Boolean(signinFormik.errors.contactNumber)}
                                helperText={signinFormik.touched.contactNumber ? signinFormik.errors.contactNumber : ""}
                                sx={{
                                    gridColumn: "span ",
                                    width: "auto",
                                    margin: "1%",
                                    fontFamily: "Poppins",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-user" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Password"
                                autoComplete="off"
                                variant="filled"
                                type="password"
                                name="password"
                                onChange={signinFormik.handleChange}
                                value={signinFormik.values.password}
                                error={signinFormik.touched.password && Boolean(signinFormik.errors.password)}
                                helperText={signinFormik.touched.password ? signinFormik.errors.password : ""}
                                sx={{
                                    gridColumn: "span ",
                                    width: "auto",
                                    margin: "1%",
                                    fontFamily: "Poppins",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i class="fas fa-lock" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <p>&nbsp;</p>
                            <Button
                                type="submit"
                                className="btn bubble "
                                id="sign-in-btn"
                                value="Sign up"
                                onClick={signinFormik.handleSubmit}
                                sx={{
                                    marginX: "30%",
                                    borderRadius: "20px",
                                    backgroundColor: "#241c2c",
                                    color: "#aeae50",
                                    border: "2px solid #aeae50",
                                    "&:hover": {
                                        boxShadow: "none",
                                        backgroundColor: "#aeae50",
                                        color: "#241c2c",
                                        border: "2px solid #aeae50",
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                            <p>&nbsp;</p>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn