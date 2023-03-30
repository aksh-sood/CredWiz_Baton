import "./SignUp.css";
import { Box, Button, TextField, Grid } from "@mui/material";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import IconButton from "@mui/material/IconButton";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCPassword, setShowCPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const userSchema = yup.object({
    firstName: yup
      .string("Should be String")
      .matches(/^[a-zA-Z]+$/, "only alphabets")
      .required("First name is required"),
    lastName: yup
      .string("Should be String")
      .matches(/^[a-zA-Z]+$/, "only alphabets")
      .required("Last name is required"),
    email: yup
      .string("Should be string")
      .email("must be valid email")
      .required("Email is required"),
    password: yup.string().required("password is required").min(8, "Required"),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long")
      .required("phone number is required"),
    address1: yup.string("should be string").required("address is required"),
    // address2: yup.string("should be string").required("address is required")
  });

  const userFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cPassword: "",
      phoneNumber: "",
      address1: "",
      address2: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
      const datas = {
        userName: `${values.firstName} ${values.lastName}`,
        contactNumber: `${values.phoneNumber}`,
        emailId: `${values.email}`,
        password: `${values.password}`,
        address: `${values.address1} ${values.address2}`,
      };
      console.log(datas);
      axios
        .post("http://localhost:9090/user/register", datas)
        .then((res) => {
          console.log(res);
          alert("registration successful. login to continue");
          navigate("/signin");
        })
        .catch((res) => {
          console.log(res);
          alert("User Already exit");
        });
    },
  });
  return (
    <>
      <div className="signupbody">
        <div className="leftbody">
          <div className="leftinnerbody">
            <div className="leftbodylogo">
              <Link to="/" height="auto" className="imagelogo">
                <img src={Logo} alt="logo" href="/" />
              </Link>
              <h1 style={{ color: "#AEAE50" }}>Existing user ?</h1>
              <p style={{ color: "#AEAE50" }}>
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
            <div className="leftbodyimage"></div>
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
                  borderRadius: "20px",
                  "& label": { color: "#AEAE50" },
                },
                marginLeft: "10%",
                marginRight: "10%",
                width: "80%",
                height: "100%",
                background: "#241c2c",
                borderRadius: "20px",
                justifyContent: "space-between",
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
                  onChange={userFormik.handleChange}
                  values={userFormik.values.firstName}
                  error={
                    userFormik.touched.firstName &&
                    Boolean(userFormik.errors.firstName)
                  }
                  helperText={
                    userFormik.touched.firstName
                      ? userFormik.errors.firstName
                      : ""
                  }
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Last Name"
                  type="text"
                  onChange={userFormik.handleChange}
                  value={userFormik.values.lastName}
                  error={
                    userFormik.touched.lastName &&
                    Boolean(userFormik.errors.lastName)
                  }
                  helperText={
                    userFormik.touched.lastName
                      ? userFormik.errors.lastName
                      : ""
                  }
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Email"
                  type="email"
                  name="email"
                  value={userFormik.values.email}
                  onChange={userFormik.handleChange}
                  helperText={
                    userFormik.touched.email ? userFormik.errors.email : ""
                  }
                  error={
                    userFormik.touched.email && Boolean(userFormik.errors.email)
                  }
                  sx={{
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Contact Number"
                  onChange={userFormik.handleChange}
                  type="number"
                  name="phoneNumber"
                  value={userFormik.values.phoneNumber}
                  error={
                    userFormik.touched.phoneNumber &&
                    Boolean(userFormik.errors.phoneNumber)
                  }
                  helperText={
                    userFormik.touched.phoneNumber
                      ? userFormik.errors.phoneNumber
                      : ""
                  }
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  autoComplete="off"
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  onChange={userFormik.handleChange}
                  value={userFormik.values.password}
                  error={
                    userFormik.touched.password &&
                    Boolean(userFormik.errors.password)
                  }
                  helperText={
                    userFormik.touched.password
                      ? userFormik.errors.password
                      : ""
                  }
                  name="password"
                  sx={{
                    gridColumn: "span ",
                    width: "auto",
                    margin: "1%",
                    fontFamily: "Poppins",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
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
                  type={showCPassword ? "text" : "password"}
                  onChange={userFormik.handleChange}
                  value={userFormik.values.cPassword}
                  error={
                    userFormik.touched.cPassword &&
                    Boolean(userFormik.errors.cPassword)
                  }
                  helperText={
                    userFormik.touched.cPassword
                      ? userFormik.errors.cPassword
                      : ""
                  }
                  label="Confirm Password"
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
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showCPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
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
                  onChange={userFormik.handleChange}
                  value={userFormik.values.address1}
                  error={
                    userFormik.touched.address1 &&
                    Boolean(userFormik.errors.address1)
                  }
                  helperText={
                    userFormik.touched.address1
                      ? userFormik.errors.address1
                      : ""
                  }
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  autoComplete="off"
                  variant="filled"
                  label="Address Line 2"
                  name="address2"
                  onChange={userFormik.handleChange}
                  value={userFormik.values.address2}
                  error={
                    userFormik.touched.address2 &&
                    Boolean(userFormik.errors.address2)
                  }
                  helperText={
                    userFormik.touched.address2
                      ? userFormik.errors.address2
                      : ""
                  }
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
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ color: "transparent" }}
                      >
                        <IconButton
                          style={{ color: "transparent" }}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <VisibilityOff style={{ color: "transparent" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <p>&nbsp;</p>
              <Button
                type="submit"
                className="btn bubble "
                id="sign-in-btn"
                onClick={userFormik.handleSubmit}
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
  );
};
export default SignUp;
