import "../../styles/signStyle.css";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import { useRef, useState } from "react";
export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

const SignUp = () => {
  const ref = useRef();
  const [error, setError] = useState(false);

  const handleBlur = (event) => {
    if (event.target.validity.patternMismatch) {
      ref.current.focus();
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <div class="forms-container">
        <div class="signuppos">
          <h2 class="title">Sign up</h2>
        </div>

        <div class="signupfields">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              contactNumber: "",
              aadharNumber: "",
              PANNumber: "",
              address: "",
            }}
            validate={(values) => {
              const errors = {};
              values.address = values.address1 + values.address2;
              if (!values.email) {
                errors.email = "Required";
              } else if (!validEmail.test(values.email)) {
                errors.email = "Invalid Email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} action="#" class="sign-in-form">
                <Grid container spacing={1}>
                  <Grid item xs={3} md={4} />
                  <Grid container xs={9} md={8} spacing={1}>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="First Name"
                          onChange={handleChange}
                          name="firstName"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="Last Name"
                          onChange={handleChange}
                          name="lastName"
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item xs={3} md={4} />
                  <Grid container xs={9} md={8} spacing={1}>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input
                          required
                          type="email"
                          placeholder="Email"
                          onChange={handleChange}
                          name="email"
                        />
                        {/* <small */}
                        {/* //   id="passwordHelpBlock" */}
                        {/* //   class="form-text text-muted" */}
                        {/* // > */}
                        {errors.email && touched.email && errors.email}{" "}
                        {/* </small> */}
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-phone"></i>
                        <input
                          required
                          type="text"
                          onBlur={handleBlur}
                          pattern="[-]?[0-9]*[.,]?[0-9]+"
                          placeholder="Contact Number"
                          onChange={handleChange}
                          name="contactNumber"
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item xs={3} md={4} />
                  <Grid container xs={9} md={8} spacing={1}>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={handleChange}
                          name="password"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          onChange={handleChange}
                          name="cpassword"
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item xs={3} md={4} />
                  <Grid item xs={9} md={8}>
                    <div class="input-field">
                      <i class="fas fa-duotone fa-house"></i>
                      <input
                        type="text"
                        placeholder="Address Line 1"
                        onChange={handleChange}
                        name="address1"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={3} md={4} />
                  <Grid item xs={9} md={8}>
                    <div class="input-field">
                      <i class="fas fa-duotone fa-house"></i>
                      <input
                        type="text"
                        placeholder="Address Line 2"
                        onChange={handleChange}
                        name="address2"
                      />
                    </div>
                  </Grid>

                  <Grid item xs={3} md={4} />
                  <Grid container xs={9} md={8} spacing={1}>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-passport"></i>
                        <input
                          type="text"
                          placeholder="Pan No"
                          onChange={handleChange}
                          name="PANNumber"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div class="input-field">
                        <i class="fas fa-solid fa-id-card"></i>
                        <input
                          type="text"
                          placeholder="Aadhar No"
                          onChange={handleChange}
                          name="aadharNumber"
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} md={5} />
                  <Grid item xs={12} md={6}>
                    <input type="submit" class="btn" value="Sign up" />
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignUp;
