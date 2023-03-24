// import "../../styles/signStyle.css";
// import Grid from "@mui/material/Grid";
// import { Formik } from "formik";
// import { useRef, useState } from "react";
// import * as React from "react";
// import InputAdornment from "@mui/material/InputAdornment";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Box, Button, TextField, MenuItem } from "@mui/material";

// export const validEmail = new RegExp(
//   "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
// );
// export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// const SignUp = () => {
//   const ref = useRef();
//   const [error, setError] = useState(false);
//   const [showPassword, setShowPassword] = React.useState(false);

//   const handleBlur = (event) => {
//     if (event.target.validity.patternMismatch) {
//       ref.current.focus();
//       setError(true);
//       console.log(error);
//     }
//   };

//   const initialValues = {
//     userEmail: "",
//     password: "",
//     cPassword: "",
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     address1: "",
//     address2: "",
//     panNumber: "",
//     aadharNumber: "",
//   };
//   const toggle = [
//     {
//       value: true,
//       label: "Admin",
//     },
//     {
//       value: false,
//       label: "User",
//     },
//   ];
//   const userSchema = yup.object().shape({
//     aadharNumber: yup
//       .string()
//       .matches(
//         /(^[0-9]{4}[0-9]{4}[0-9]{4}$)|(^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|(^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/,
//         "Invalid Aadhar Number"
//       )
//       .required("Aadhar Number is required"),

//     address1: yup.string().required("Address is required"),

//     panNumber: yup
//       .string()
//       .min(10, "Too Short!")
//       .max(10, "Too Long!")
//       .required("PAN Number is required"),

//     firstName: yup
//       .string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Firstname is required"),

//     lastName: yup
//       .string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Lastname is required"),

//     phoneNumber: yup
//       .string()
//       .required("Phone number is required")
//       .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Invalid phone number"),

//     userEmail: yup.string().email().required("Email is required"),

//     password: yup
//       .string()
//       .required("Password is required")
//       .min(6, "Password is too short - should be 6 chars minimum"),

//     cPassword: yup
//       .string()
//       .oneOf([yup.ref("password"), null], "Passwords must match")
//       .required("Password must match"),
//   });

//   const handleFormSubmit = (values, actions, setSubmitting) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };
//   return (
//     <>
//       <div class="forms-container">
//         <div class="signuppos">
//           <h2 class="title">Sign up</h2>
//           <h3 class="title2">To have an amazing expereince with us</h3>
//         </div>

//         <div class="signupfields">
//           <Formik
//             onSubmit={handleFormSubmit}
//             initialValues={initialValues}
//             validationSchema={userSchema}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               // isSubmitting,
//             }) => (
//               <form onSubmit={handleSubmit} action="#">
// <Box
//   sx={{
//     "& .MuiTextField-root": {
//       m: 1,
//       backgroundColor: "white",
//       // width: "35ch",
//       borderRadius: "20px",
//       // fontFamily: "Poppins",
//       // fontSize: "10px",
//     },
//     marginLeft: "30%",
//     width: "50%",
//     height: "100%",
//     background: "#241c2c",
//     borderRadius: "20px",
//     justifyContent: "space-between",
//     // marginLeft: "30%",
//   }}
// >
//   <p>&nbsp;</p>
//   <Grid container spacing={1}>
//     <Grid item xs={3} md={1} />
//     <Grid container xs={9} md={10} spacing={2}>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           placeholder="First Name"
//           type="text"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.firstName}
//           name="firstName"
//           error={!!touched.firstName && !!errors.firstName}
//           helperText={touched.firstName && errors.firstName}
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-user" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           placeholder="Last Name"
//           type="text"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.lastName}
//           name="lastName"
//           error={!!touched.lastName && !!errors.lastName}
//           helperText={touched.lastName && errors.lastName}
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-user" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//     </Grid>
//     <Grid item xs={3} md={1} />
//     <Grid item xs={3} md={1} />
//     <Grid container xs={9} md={10} spacing={2}>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           // id="filled-basic"
//           placeholder="Email"
//           type="email"
//           // label="Email"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.userEmail}
//           name="userEmail"
//           error={!!touched.userEmail && !!errors.userEmail}
//           helperText={touched.userEmail && errors.userEmail}
//           sx={{
//             // gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-envelope" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           placeholder="Contact Number"
//           type="text"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.phoneNumber}
//           name="phoneNumber"
//           error={!!touched.phoneNumber && !!errors.phoneNumber}
//           helperText={touched.phoneNumber && errors.phoneNumber}
//           sx={{
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-phone" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//     </Grid>

//     <Grid item xs={3} md={1} />
//     <Grid item xs={3} md={1} />
//     <Grid container xs={9} md={10} spacing={1}>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           type={showPassword ? "text" : "password"}
//           // label="Password"
//           placeholder="Enter your Password"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.password}
//           name="password"
//           error={!!touched.password && !!errors.password}
//           helperText={touched.password && errors.password}
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-lock" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           type={showPassword ? "text" : "password"}
//           placeholder="Confirm Password"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.cPassword}
//           name="cPassword"
//           error={!!touched.cPassword && !!errors.cPassword}
//           helperText={touched.cPassword && errors.cPassword}
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-lock" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//     </Grid>

//     <Grid item xs={3} md={1} />
//     <Grid item xs={3} md={1} />
//     <Grid item xs={9} md={10}>
//       <TextField
//         autoComplete="off"
//         variant="filled"
//         placeholder="Address Line 1"
//         onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.address1}
//         name="address1"
//         error={!!touched.address1 && !!errors.address1}
//         helperText={touched.address1 && errors.address1}
//         sx={{
//           gridColumn: "span ",
//           width: "100%",
//           margin: "1%",
//           fontFamily: "Poppins",
//         }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <i class="fas fa-house" />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </Grid>
//     <Grid item xs={3} md={1} />
//     <Grid item xs={3} md={1} />
//     <Grid item xs={9} md={10}>
//       <TextField
//         autoComplete="off"
//         variant="filled"
//         placeholder="Address Line 2"
//         onBlur={handleBlur}
//         onChange={handleChange}
//         value={values.address2}
//         name="address2"
//         error={!!touched.address2 && !!errors.address2}
//         helperText={touched.address2 && errors.address2}
//         sx={{
//           gridColumn: "span ",
//           width: "100%",
//           margin: "1%",
//           fontFamily: "Poppins",
//         }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <i class="fas fa-house" />
//             </InputAdornment>
//           ),
//         }}
//       />
//     </Grid>

//     <Grid item xs={3} md={1} />
//     <Grid item xs={3} md={1} />
//     <Grid container xs={9} md={10} spacing={1}>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           placeholder="PAN Card Number"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.panNumber}
//           name="panNumber"
//           error={!!touched.panNumber && !!errors.panNumber}
//           helperText={touched.panNumber && errors.panNumber}
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-passport" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <TextField
//           autoComplete="off"
//           variant="filled"
//           placeholder="Aadhar Card Number"
//           onBlur={handleBlur}
//           onChange={handleChange}
//           value={values.aadharNumber}
//           name="aadharNumber"
//           error={
//             !!touched.aadharNumber && !!errors.aadharNumber
//           }
//           helperText={
//             touched.aadharNumber && errors.aadharNumber
//           }
//           sx={{
//             gridColumn: "span ",
//             width: "100%",
//             margin: "1%",
//             fontFamily: "Poppins",
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <i class="fas fa-id-card" />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Grid>
//     </Grid>
//   </Grid>
//   <p>&nbsp;</p>
//   <Button
//     onSubmit={handleFormSubmit}
//     type="submit"
//     className="btn bubble "
//     id="sign-in-btn"
//     value="Sign up"
//     sx={{
//       borderRadius: "20px",
//       backgroundColor: "#aeae50",
//       color: "#241c2c",
//       border: "2px solid #241c2c",
//       "&:hover": {
//         boxShadow: "none",
//         backgroundColor: "#241c2c",
//         color: "#aeae50",
//         border: "2px solid #aeae50",
//       },
//     }}
//   >
//     Sign Up
//   </Button>
//   <p>&nbsp;</p>
// </Box>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUp;


import "./SignUp.css"
import { Box, Button, TextField, Grid } from "@mui/material"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { color } from "@mui/system"
import InputAdornment from "@mui/material/InputAdornment"

const SignIn = () => {
  return (
    <>
      <div className="signupbody">
        <div className="leftbody">
          <div className="leftinnerbody">
            <div className="leftbodylogo">
              <Link to="/" height="auto" className="imagelogo">
                <img src={Logo} alt="logo" href="/" />
              </Link>
              <h1 style={{ color: '#AEAE50' }}>Existing user ?</h1>
              <p style={{ color: '#AEAE50' }}>
                Login here to continue your journey with us
              </p>
              <Button
                type="submit"
                className="btn bubble "
                id="sign-in-btn"
                value="Sign up"
                href="/signin"
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
                Sign In
              </Button>
            </div>
            <div className="leftbodyimage">
            </div>
          </div>
        </div>
        <div className="rightbody">
          <div className="rightinnerbody">
            <Box>
              <h1>Start your journey with us</h1>
            </Box>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  backgroundColor: "white",
                  // width: "35ch",
                  borderRadius: "20px",
                  "& label": { color: "#AEAE50" }
                  // fontFamily: "Poppins",
                  // fontSize: "10px",
                },
                marginLeft: "10%",
                marginRight: "10%",
                width: "80%",
                height: "100%",
                background: "#241c2c",
                borderRadius: "20px",
                justifyContent: "space-between",
                // marginLeft: "30%",
              }}
            >
              <p>&nbsp;</p>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="First Name"
                  type="text"
                  name="firstName"
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
                  autoComplete="off"
                  variant="filled"
                  label="Last Name"
                  type="text"
                  name="lastName"
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
              </div>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  // id="filled-basic"
                  label="Email"
                  type="email"
                  // label="Email"
                  name="userEmail"
                  sx={{
                    // gridColumn: "span ",
                    width: "auto",
                    margin: "1%",
                    fontFamily: "Poppins",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="fas fa-envelope" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Contact Number"
                  type="text"
                  name="phoneNumber"
                  sx={{
                    width: "auto",
                    margin: "1%",
                    fontFamily: "Poppins",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="fas fa-phone" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  // type={showPassword ? "text" : "password"}
                  // label="Password"
                  label="Password"
                  name="password"
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
                <TextField
                  autoComplete="off"
                  variant="filled"
                  // type={showPassword ? "text" : "password"}
                  label="Conform Password"
                  name="cPassword"
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
              </div>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Address Line 1"
                  name="address1"
                  sx={{
                    gridColumn: "span ",
                    width: "auto",
                    margin: "1%",
                    fontFamily: "Poppins",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="fas fa-house" />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Address Line 2"
                  name="address2"
                  sx={{
                    gridColumn: "span ",
                    width: "auto",
                    margin: "1%",
                    fontFamily: "Poppins",
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i class="fas fa-house" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <TextField
                autoComplete="off"
                variant="filled"
                label="PAN Card Number"
                name="panNumber"
                sx={{
                  gridColumn: "span ",
                  width: "auto",
                  margin: "1%",
                  fontFamily: "Poppins",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-passport" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                autoComplete="off"
                variant="filled"
                label="Aadhar Card Number"
                name="aadharNumber"
                sx={{
                  gridColumn: "span ",
                  width: "auto",
                  margin: "1%",
                  fontFamily: "Poppins",
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-id-card" />
                    </InputAdornment>
                  ),
                }}
              />
              <p>&nbsp;</p>
              <Button
                // onSubmit={handleFormSubmit}
                type="submit"
                className="btn bubble "
                id="sign-in-btn"
                value="Sign up"
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#241c2c",
                  color: "#aeae50",
                  border: "2px solid #aeae50",
                  width: "20ch",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "#aeae50",
                    color: "#241c2c",
                    border: "2px solid #aeae50",
                  },
                }}
              >
                Sign Up
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