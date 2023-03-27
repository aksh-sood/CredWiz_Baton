import axios from "axios";

export const register=(data)=>{
    axios.post("http://localhost:8086/register",data)
    .then((res)=>{
        if(res.status===200){
        alert("registeration suceessfull")
        }
    });
}