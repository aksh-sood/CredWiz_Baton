import axios from "axios";

export const register=(data)=>{
    const datas={
        userName:`${data.firstName} ${data.lastName}`,
        contactNumber:`${data.phoneNumber}`,
        emailId:`${data.email}`,
        password:`${data.password}`,
        address:`${data.address1} ${data.address2}`
    }
    console.log(datas);
    axios.post("http://localhost:8086/register",datas)
    .then((res)=>{


        if(res.status===200){
        alert("registration successful")
        }
    });
}
