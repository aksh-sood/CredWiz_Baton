import Row from "react-bootstrap/esm/Row"
import { Form } from "react-router-dom"
import './WithdrawMoney.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormLabel from "react-bootstrap/esm/FormLabel";

const WithdrawMoney=()=>{
    return (
        <>
            <Row>
                <h1 id="withdraw-h1">Withdraw Money</h1>
            </Row>
            <Row>
                <Form class="withdrawform">
                    <FormLabel class="labelstyle">Amount</FormLabel>
                    <div class="withdraw-input-field">
                    <input type='text' />
                    </div>
                    <div>
                        <button class="withdrawbutton">Withdraw</button>
                    </div>
                </Form>
            </Row>
        </>
    )
}
export default WithdrawMoney