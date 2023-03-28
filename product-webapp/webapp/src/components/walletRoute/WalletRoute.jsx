import { Navigate } from "react-router-dom"

localStorage.setItem("iswalletcreated",true)

const WalletRoute = ({ children }) => {
    return (
        <>
            {
            localStorage.getItem("iswalletcreated") ? children : <Navigate to="/dashboard"></Navigate>
            }
        </>
    )
}
export default WalletRoute