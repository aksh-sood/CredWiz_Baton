import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import './UpdateUser.css';
import img from "../../assets/person.svg"

const UpdateUser = () => {
    return (
        <>
            <div className="bg">
            <Row style={{ paddingTop: "30px" }}>
                <Col id="head">
                    <h2>Update user</h2>
                </Col>
                <Col className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" class="bi bi-person" viewBox="-2 -2 20 20">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                </Col>
            </Row>
            <Form id="forms">
                <Row id="row">
                    <Form.Group className='groups'>
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control className='input-md' type='text' name='firstname' placeholder='First Name' required />
                    </Form.Group>
                    <Form.Group className='groups'>
                        <Form.Label>LAST NAME</Form.Label>
                        <Form.Control className="input-md" type="text" name="lastname" placeholder='Last Name' required />
                    </Form.Group>
                </Row>
                <Row id="rows">
                    <Form.Group className='groups'>
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control className='input-md' type='tel' name='mobile' placeholder=' 123-452-6738' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </Form.Group>
                    <Form.Group className='groups'>
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control className='input-md' type='email' name='email' placeholder='xyz@email.com' required />
                    </Form.Group>
                </Row>
                <Row id='rows'>
                    <Form.Group className='groups' style={{ width: "100%" }}>
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control className='input-md' style={{ width: "50rem" }} type='text' name='address' placeholder='address' />
                    </Form.Group>
                </Row>
                <Row id="rows">
                    <Form.Group className='groups'>
                        <Form.Label>CITY</Form.Label>
                        <Form.Control className='input-md' type='city' name='city' placeholder='city' required />
                    </Form.Group>
                    <Form.Group className='groups'>
                        <Form.Label>STATE</Form.Label>
                        <Form.Control className='input-md' type='type' name='state' placeholder='state' required />
                    </Form.Group>
                </Row>
                <Row id="rows">
                    <Form.Group className='groups'>
                        <Form.Label>ZIP CODE</Form.Label>
                        <Form.Control className='input-md' type='tel' name='mobile' placeholder='21984255' pattern="[0-9]{6}" required />
                    </Form.Group>
                    <Form.Group className='groups'>
                        <Form.Label>COUNTRY</Form.Label>
                        <Form.Control className='input-md' type='text' name='country' placeholder='country' required />
                    </Form.Group>
                </Row>
                <Row id="rows">
                    <Form.Group className='groups'>
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control className='input-md' type='password' name='mobile' placeholder='23948982489' required />
                    </Form.Group>
                    <Form.Group className='groups'>
                        <Form.Label>CONFIRM PASWORD</Form.Label>
                        <Form.Control className='input-md' type='password' name='con-password' placeholder='confirm password' required />
                    </Form.Group>
                </Row>
                <Row id="rows">
                    <Button>Save</Button>
                </Row>
            </Form>
            </div>
        </>
    );
}
export default UpdateUser;