import { Box, Button, TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Navbar from "../navbar/Navbar";
import NavbarWallet from "../createWallet/NavbarWallet";
import Footer from "../footer/Footer";
import "./UpdateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

const iswalletadded = false;

const UpdateUser = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwt_auth");
  const contactNumber = localStorage.getItem("contactNumber");
  function deleteUser() {
    const contactNumber = localStorage.getItem("contactNumber");

    fetch(`https://CredWiz.stackroute.io/user/delete/${contactNumber}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        alert("User deleted successfully");
        localStorage.clear();
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
        alert("something went wrong please sign in again and try again");
        navigate("/signin");
      });
  }
  // function deleteUser() {
  //   axios
  //     .delete(`http://localhost:8090/user/delete/${contactNumber}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       alert("User deleted successfully");
  //       localStorage.clear();
  //       navigate("/signup");
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.log(error);
  //     });
  // }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const userSchema = yup.object().shape({
    fname: yup
      .string("Should be String")
      .matches(/^[a-zA-Z]+$/, "only alphabets")
      .required("First name is required"),
    lname: yup
      .string("Should be String")
      .matches(/^[a-zA-Z]+$/, "only alphabets")
      .required("Last name is required"),
    email: yup
      .string("Should be string")
      .email("must be valid email")
      .required("Email is required"),
    password: yup.string().required("password is required").min(8, "Required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match"),
    contactno: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long")
      .required("phone number is required"),
    address: yup.string("should be string").required("address is required"),
  });
  const MyForm = () => {
    const formik = useFormik({
      initialValues: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
        contactno: 0,
        address: "",
      },
      validate: (values) => {
        const errors = {};
        const validationErrors = userSchema.validateSync(values, {
          abortEarly: false,
        });
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        return errors;
      },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let mapData = {
      contactNumber: contactNumber,
      userName: data.get("fname").concat(" ", data.get("lname")),
      emailId: data.get("email"),
      address: data.get("address"),
      password: data.get("password"),
    };
    console.log(mapData);

    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
    axios
      .put("https://CredWiz.stackroute.io/user/updateUser", mapData)
      .then((res) => {
        alert("user updated");
        console.log(res.status);

        if (res.status == 201) {
          navigate("/userProfile");
        }
      })
      .catch(function (error) {
        console.log(error.response);
        alert(error.response.data);
        navigate("/signin");
      });
  };
  return (
    <>
      {localStorage.getItem("iswalletadded") === "true" ? (
        <Navbar></Navbar>
      ) : (
        <NavbarWallet></NavbarWallet>
      )}
      <Box sx={{ marginTop: "50px", width: "100%", textAlign: "center" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: "bolder",
          }}
        >
          Update Profile
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "50px", width: "100%", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontStyle: "italic",
            color: "GrayText",
          }}
        >
          “Wealth is the ability to fully experience Life”
        </Typography>
      </Box>
      <div className="updateBody">
        <div className="updateImage"></div>
        <div className="updateForm">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": {
                width: "auto",
                background: "white",
                borderRadius: "20px",
                margin: "2%",
              },
              "& #address": { width: "50ch" },
              backgroundColor: "#241c2c",
              borderRadius: "20px",
              textAlign: "center",
            }}
            noValidate
            autoComplete="off"
            width="60%"
            height="auto"
          >
            <div>
              <TextField
                id="outlined-basic"
                name="fname"
                label="First Name"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-user" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic"
                name="lname"
                label="Last Name"
                variant="filled"
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
                id="outlined-basic"
                name="email"
                label="Email ID"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-envelope" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                name="address"
                sx={{
                  "#address": { width: { xs: "100%", lg: "50ch" } },
                  marginLeft: "0%",
                }}
                label="Address"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-house" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                name="password"
                label="Password"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-lock" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic"
                name="cpassword"
                label="Confirm Password"
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="fas fa-lock" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "30px",
                paddingBottom: "30px",
              }}
            >
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
                Update Now
              </Button>
            </Box>
          </Box>
        </div>
      </div>
      <Box sx={{ paddingTop: "15px", width: "100%", textAlign: "center" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "normal",
            fontStyle: "italic",
            color: "GrayText",
          }}
        >
          “Want to take some time off"
        </Typography>
        <Button
          className="btn bubble "
          id="sign-in-btn"
          value="Sign up"
          onClick={() => deleteUser()}
          sx={{
            margin: "1%",
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
          Delete Account
        </Button>
      </Box>
      <Footer></Footer>
    </>
  );
};
export default UpdateUser;
