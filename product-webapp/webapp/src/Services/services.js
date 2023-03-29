import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";




export const addWallet=(data)=>{
    const wallet={
        bankName:`${data.bankName}`,
        accountNumber:`${data.accountNumber}`,
        aadhaarNumber:`${data.aadhaarNumber}`,
        panNumber:`${data.panNumber}`,
       contactNumber:`${localStorage.getItem("contactNumber")}`
    }
    console.log(wallet);
        axios.post("http://localhost:9090/wallet/createWallet",wallet)
        .then((res)=>{
            if(res.status===200){
            alert("updated successful")
            }
        })
        .catch((res)=>{
            alert(res)
        })
}