import Grid from "@mui/material/Grid";
import "../../styles/signStyle.css";
import { Formik } from "formik";
import UserContext from "../../Services/context";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "none",
      width: "90%",
      padding: "0 0.4rem",
    },
  },
  // inputField: {
  //     max-width: "100%",
  // width: "100%",
  // background-color: "#f0f0f0",
  // margin: "10px 0",
  // height: "55px",
  // border-radius: 55px;
  // display: grid;
  // grid-template-columns: 15% 85%;
  // padding: 0 0.4rem;
  // position: relative;
  // },
}));

export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

const SignIn = () => {
  const classes = useStyles();

  const ref = useRef();
  const [error, setError] = useState();
  const [data, setData] = useState({ email: "", password: "" });
  // const { isLogin, setIsLogin } = useContext(UserContext);
  const print = () => {
    console.log("Sign In Successful");
  };

  return (
    <>
      <div className="forms-container">
        <div className="signinpos">
          <Formik
            initialValues={data}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!validEmail.test(values.email)) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (!validPassword.test(values.password)) {
                errors.password =
                  "Password must contain at least 1 letter and 1 number";
              }

              return errors;
            }}
            handleChange={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                console.log(data);

                console.log(data);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} action="#" className="sign-in-form">
                <h2 className="title">Welcome Back!</h2>
                <Grid container spacing={1}>
                  <Grid item md={3} />
                  <Grid item xs={3} md={6}>
                    {errors.email && touched.email && errors.email}
                    <div className="input-field">
                      <i className="fas fa-user" />
                      <input
                        type="text"
                        placeholder="Username"
                        onChange={() => {
                          console.log("hfdslk");
                          handleChange();
                        }}
                        name="email"
                        // value={values.email}
                        // style={`color:${errors.echange} `}
                        // color={errors.echange}
                      />
                    </div>

                    {/* <TextField
                      autoComplete="off"
                      variant="filled"
                      type="text"
                      label="Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.userName}
                      name="userName"
                      error={!!touched.userName && !!errors.userName}
                      helperText={touched.userName && errors.userName}
                      sx={{ gridColumn: "span 2" }}
                      id="outlined-password-input"
                      className={`${classes.root} ${classes.inputField} input-field `}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fas fa-user input-field-icon" />
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                  </Grid>
                  <Grid item md={3} />
                  <Grid item md={3} />
                  <Grid item xs={3} md={6}>
                    {errors.password && touched.password && errors.password}
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        // value={values.password}
                      />
                    </div>
                  </Grid>
                </Grid>

                <input type="submit" value="Login" className="btn solid" />
              </form>
            )}
          </Formik>
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
