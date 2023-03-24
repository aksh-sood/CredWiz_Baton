import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { width } from "@mui/system";
import './CreateWallet.css';
import NavbarWallet from "./NavbarWallet"
import Footer from "../footer/Footer"


const CreateWallet = (props) => {
    return (
        <>
        <NavbarWallet iswalletadded={props.iswalletadded}></NavbarWallet>
            <Box sx={{ marginTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom sx={{
                    fontWeight: 'bolder',
                    
                }} >Create Wallet</Typography></Box>
                <Box sx={{ paddingTop:"50px",width: '100%', textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{
                    fontWeight:'normal',
                    fontStyle: 'italic',
                    color:'GrayText'
                    
                }} >Create Wallet to avail our service</Typography></Box>
            <div className="addbankBody">
                <div className="addbankImage"></div>
                <div className="addbankForm">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m:1, width: '70%', background: 'white' ,borderRadius: "20px", margin: "15px" },
                            '& #address': { width: '50ch' },    
                            backgroundColor: "#241c2c",
                            borderRadius: "20px",
                            textAlign:"center",
                            paddingTop:"30px"

                        }}
                        noValidate
                        autoComplete="off"
                        width= "60%"
                        height= "auto"
                    >
                        <div>
                            <TextField id="outlined-basic" label="Bank Name" variant="filled" />
                            <TextField id="outlined-basic" label="Account Number" variant="filled" />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="IFSC Code" variant="filled" />
                            <TextField id="outlined-basic" label="Amount" variant="filled" />
                        </div>
                        
                       
                        
                        <Box sx={{
                            textAlign: 'center',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}>
                 <Button
                    type="submit"
                    className="btn bubble "
                    id="sign-in-btn"
                    value="Sign up"
                    // color="#241C2C"
                    // marginBottom="20px"
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
                        Add Bank
                  </Button>
                        </Box>
                    </Box>
                </div>
            </div>
           <Footer></Footer>
        </>
    );
}
export default CreateWallet;