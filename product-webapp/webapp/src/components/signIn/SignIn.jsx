import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import "../../styles/signStyle.css";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import UserContext from "../../Services/context";

import { useRef, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   "& .MuiFilledInput-root": {
//   //     // background: "none",
//   //   },
//   // },
//   root: {
//     color: "#241c2c",
//   },
// }));

const SignIn = () => {
  // const classes = useStyles();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const ref = useRef();
  const [error, setError] = useState();
  const [data, setData] = useState({ email: "", password: "" });
  // const { isLogin, setIsLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const initialValues = {
    userEmail: "",
    password: "",
  };
  const toggle = [
    {
      value: true,
      label: "Admin",
    },
    {
      value: false,
      label: "User",
    },
  ];
  const userSchema = yup.object().shape({
    userEmail: yup.string().email().required("Email is required"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  const handleFormSubmit = (values, actions, setSubmitting) => {
    console.log("FormSubmit");
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <>
      <div className="forms-container">
        <div className="signinpos">
          <div className="signinfields">
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="flex"
                    justifyContent="left"
                    mt="30px"
                    sx={{
                      // "& > div": {
                      //   gridColumn: isNonMobile ? undefined : "span 4",
                      // },
                      marginBottom: "4%",
                    }}
                  >
                    <h2 className="title">Welcome Back !</h2>
                  </Box>

                  <Box
                    display="grid"
                    component="form"
                    // gap="30px"
                    // gridTemplateColumns="repeat(1,minmax(0,2fr))"
                    sx={{
                      // "& > div": {
                      //   gridColumn: isNonMobile ? undefined : "span 4",
                      // },
                      "& .MuiTextField-root": {
                        m: 2,
                        backgroundColor: "white",
                        width: "35ch",
                        borderRadius: "20px",
                        // fontFamily: "Poppins",
                        // fontSize: "10px",
                      },
                      width: "70%",
                      height: "100%",
                      background: "#241c2c",
                      borderRadius: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <p>&nbsp;</p>
                    <TextField
                      autoComplete="off"
                      variant="filled"
                      // id="filled-basic"
                      placeholder="Email"
                      type="email"
                      // label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.userEmail}
                      name="userEmail"
                      error={!!touched.userEmail && !!errors.userEmail}
                      helperText={touched.userEmail && errors.userEmail}
                      sx={{
                        gridColumn: "span ",
                        width: "100%",
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
                      type={showPassword ? "text" : "password"}
                      // label="Password"
                      placeholder="Enter your password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{
                        gridColumn: "span ",
                        width: "100%",
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
                      onSubmit={handleFormSubmit}
                      type="submit"
                      className="btn bubble "
                      id="sign-in-btn"
                      value="Sign up"
                      sx={{
                        marginX: "30%",
                        borderRadius: "20px",
                        backgroundColor: "#aeae50",
                        color: "#241c2c",
                        border: "2px solid #241c2c",
                        "&:hover": {
                          boxShadow: "none",
                          backgroundColor: "#241c2c",
                          color: "#aeae50",
                          border: "2px solid #aeae50",
                        },
                      }}
                    >
                      Sign In
                    </Button>
                    <p>&nbsp;</p>
                  </Box>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;

// <Formik
//   initialValues={{ email: "", password: "" }}
//   validate={(values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = "Invalid email address";
//     }
//     return errors;
//   }}
//   onSubmit={(values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   }}
// >
//   {({
//     values,
//     errors,
//     touched,
//     handleChange,
//     handleSubmit,
//     isSubmitting,
//   }) => (
//     <form action="#" className="sign-in-form">
//       <h2 className="title">Welcome Back!</h2>
//       <Grid container spacing={1}>
//         <Grid item md={3} />
//         <Grid item xs={3} md={6}>
//           <div className="input-field">
//             <i className="fas fa-user"></i>
//             <input
//               type="text"
//               placeholder="Username"
//               onChange={handleChange}
//               value={values.email}
//             />
//             {errors.email && touched.email && errors.email}
//           </div>
//         </Grid>
//         <Grid item md={3} />
//         <Grid item md={3} />
//         <Grid item xs={3} md={6}>
//           <div className="input-field">
//             <i className="fas fa-lock"></i>
//             <input
//               type="password"
//               placeholder="password"
//               onChange={handleChange}
//               value={values.password}
//             />
//             {errors.password && touched.password && errors.password}
//           </div>
//         </Grid>
//       </Grid>

//       <input type="submit" value="Login" className="btn solid" />
//     </form>
//   )}
// </Formik>;
