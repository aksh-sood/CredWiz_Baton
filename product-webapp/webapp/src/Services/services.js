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
    axios.post("http://localhost:8090/user/register",datas)
    .then((res)=>{


        if(res.status===200){
        alert("registration successful")
        }
    });
}
export const addWallet=(data)=>{
    const wallet={
        bankName:`${data.bankName}`,
        accountNumber:`${data.accountNumber}`,
        aadhaarNumber:`${data.aadhaarNumber}`,
        panNumber:`${data.panNumber}`,
//        contactNumber:`${localStorage.getItem("contactNumber")}`
 contactNumber:`${9999999999}`
    }
    console.log(data);
        axios.post("http://localhost:8090/user/userUpdate",data)
        .then((res)=>{
            if(res.status===200){
            alert("updated successful")
            }
        });
}