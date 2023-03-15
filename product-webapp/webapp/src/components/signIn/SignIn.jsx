import Grid from "@mui/material/Grid";
import "../../styles/signStyle.css";
import { Formik } from "formik";
const SignIn = () => {
  const print = () => {
    console.log("Sign In Successful");
  };
  return (
    <>
      <div class="forms-container">
        <div class="signinpos">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return {};
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            // onSubmit={async (values) => {
            //   alert("submit");
            // }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} class="sign-in-form">
                <h2 class="title">Welcome Back!</h2>
                <Grid container spacing={1}>
                  <Grid item md={3} />
                  <Grid item xs={3} md={6}>
                    <div class="input-field">
                      <i class="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Username"
                        onChange={handleChange}
                        name="email"
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                  </Grid>
                  <Grid item md={3} />
                  <Grid item md={3} />
                  <Grid item xs={3} md={6}>
                    <div class="input-field">
                      <i class="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                      />
                      {errors.password && touched.password && errors.password}
                    </div>
                  </Grid>
                </Grid>

                <input type="submit" value="Login" class="btn solid" />
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
//     <form action="#" class="sign-in-form">
//       <h2 class="title">Welcome Back!</h2>
//       <Grid container spacing={1}>
//         <Grid item md={3} />
//         <Grid item xs={3} md={6}>
//           <div class="input-field">
//             <i class="fas fa-user"></i>
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
//           <div class="input-field">
//             <i class="fas fa-lock"></i>
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

//       <input type="submit" value="Login" class="btn solid" />
//     </form>
//   )}
// </Formik>;
