import SignInput from "../signInput/SignInput";
import "../../styles/signStyle.css";
import Grid from "@mui/material/Grid";
const SignUp = () => {
  return (
    <>
      <div class="forms-container">
        <div class="signuppos">
          <h2 class="title">Sign up</h2>
        </div>

        <div class="signupfields">
          <form action="#" class="sign-in-form">
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <Grid container spacing={1}>
              <Grid item xs={3} md={4} />
              <Grid container xs={9} md={8} spacing={1}>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-user"
                    placeholder="First Name"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-user"
                    placeholder="Last Name"
                    type="text"
                  />
                </Grid>
              </Grid>
              <Grid item xs={3} md={6} />
              <Grid item xs={9} md={4}>
                <SignInput
                  icon="fas fa-envelope"
                  placeholder="Email"
                  type="email"
                />
              </Grid>

              <Grid item xs={3} md={3} />
              <Grid container xs={9} md={9} spacing={1}>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-lock"
                    placeholder="Password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-lock"
                    placeholder="Confirm Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Grid item xs={3} md={6} />
              <Grid item xs={9} md={4}>
                <SignInput
                  icon="fas fa-phone"
                  placeholder="Contact No"
                  type="number"
                />
              </Grid>
              <Grid item xs={3} md={3} />
              <Grid item xs={9} md={9}>
                <SignInput
                  icon="fas fa-duotone fa-house"
                  placeholder="Address line 1"
                  type="text"
                />
              </Grid>
              <Grid item xs={3} md={3} />
              <Grid item xs={9} md={9}>
                <SignInput
                  icon="fas fa-duotone fa-house"
                  placeholder="Address line 2"
                  type="text"
                />
              </Grid>

              <Grid item xs={3} md={3} />
              <Grid container xs={9} md={9} spacing={1}>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-passport"
                    placeholder="Pan No"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SignInput
                    icon="fas fa-solid fa-id-card"
                    placeholder="Aadhar No"
                    type="number"
                  />
                </Grid>
              </Grid>
              <Grid item xs={3} md={5} />
              <Grid item xs={12} md={6}>
                <input type="submit" class="btn" value="Sign up" />
              </Grid>
            </Grid>
            {/* </Box> */}
            {/* <div class="row"></div> */}
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
