import Row from "react-bootstrap/esm/Row"
import { Form } from "react-router-dom"
import './AddMoney.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormLabel from "react-bootstrap/esm/FormLabel";

const AddMoney=()=>{
    return (
        <>
            <Row>
                <h1 id="add-h1">Add Money</h1>
            </Row>
            <Row>
                <Form class="addform">
                    <FormLabel class="labelstyle">Connected Bank Account No.</FormLabel>
                    <div class="add-input-field">
                    <input type='text' />
                    </div>
                    <FormLabel class="labelstyle">Amount</FormLabel>
                    <div class="add-input-field">
                    <input type='text' />
                    </div>
                    <FormLabel class="labelstyle">Note</FormLabel>
                    <div class="add-input-textarea">
                    <input type='text' />
                    </div>
                    <div>
                        <button class="addbutton">Add</button>
                    </div>
                </Form>
            </Row>
        </>
    )
}
export default AddMoney