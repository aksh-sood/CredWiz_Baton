import { Navigate } from "react-router-dom"


const WalletRoute = ({ children }) => {
    return (
        <>
            {
            localStorage.getItem("iswalletadded") ? children : <Navigate to="/dashboard"></Navigate>
            }
        </>
    )
}
export default WalletRoute