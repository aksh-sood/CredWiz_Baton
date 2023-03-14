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
            <Grid container spacing={1}>
              <Grid item xs={3} md={4} />
              <Grid container xs={9} md={8} spacing={1}>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="First Name" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={3} md={4} />
              <Grid container xs={9} md={8} spacing={1}>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-envelope"></i>
                    <input type="email" placeholder="email" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-phone"></i>
                    <input type="text" placeholder="Contact Number" />
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={3} md={4} />
              <Grid container xs={9} md={8} spacing={1}>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="password" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Confirm Password" />
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={3} md={4} />
              <Grid item xs={9} md={8}>
                <div class="input-field">
                  <i class="fas fa-duotone fa-house"></i>
                  <input type="text" placeholder="Address line 1" />
                </div>
              </Grid>
              <Grid item xs={3} md={4} />
              <Grid item xs={9} md={8}>
                <div class="input-field">
                  <i class="fas fa-duotone fa-house"></i>
                  <input type="text" placeholder="Address line 2" />
                </div>
              </Grid>

              <Grid item xs={3} md={4} />
              <Grid container xs={9} md={8} spacing={1}>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-passport"></i>
                    <input type="text" placeholder="Pan No" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div class="input-field">
                    <i class="fas fa-solid fa-id-card"></i>
                    <input type="text" placeholder="Aadhar No" />
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={3} md={5} />
              <Grid item xs={12} md={6}>
                <input type="submit" class="btn" value="Sign up" />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
