import Row from "react-bootstrap/esm/Row"
import { Form } from "react-router-dom"
import './SendMoney.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormLabel from "react-bootstrap/esm/FormLabel";

const SendMoney=()=>{
    return (
        <>
            <Row>
                <h1 id="send-h1">Send Money</h1>
            </Row>
            <Row>
                <Form class="sendform">
                    <FormLabel class="labelstyle">Receiver Mobile No.</FormLabel>
                    <div class="send-input-field">
                    <input type='text' />
                    </div>
                    <FormLabel class="labelstyle">Amount</FormLabel>
                    <div class="send-input-field">
                    <input type='text' />
                    </div>
                    <FormLabel class="labelstyle">Note</FormLabel>
                    <div class="send-input-textarea">
                    <input type='text' />
                    </div>
                    <div>
                        <button class="sendbutton">Send</button>
                    </div>
                </Form>
            </Row>
        </>
    )
}
export default SendMoney