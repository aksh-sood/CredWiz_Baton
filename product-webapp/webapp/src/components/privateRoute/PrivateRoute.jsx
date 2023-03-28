import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    return (
        <>
            {
                localStorage.getItem("isloggedin") ? children : <Navigate to="/signin"></Navigate>
            }
        </>
    )
}
export default PrivateRoute