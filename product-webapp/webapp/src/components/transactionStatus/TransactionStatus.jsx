import "./TransactionStatus.css"
import GreenCheck from "../../assets/green_checkmark.svg";
import RedCross from "../../assets/red-x-icon.svg"
import Footer from "../footer/Footer"

const TransactionStatus = ({status}) => {
    //const path = status? GreenCheck:RedCross
    const path = GreenCheck; // to be removed when backend is completed
    return (
        <div className='tstatus'>
            <img  src={path} height="180vh" width="180vh"/>
        </div>
    )
}

export default TransactionStatus