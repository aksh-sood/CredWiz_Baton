
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../../assets/person.svg';
import './UserProfile.css';
const UserProfile = () => {
    return (
        <>
            <Row>
                <h2 id="head-h2">User Profile</h2>
            </Row>
            <Form id="form">
                <div className='row'>
                    <Col className='mx-4'>
                        <div className='row'>
                            <Form.Group className='group'>
                                <Form.Label>FIRST NAME</Form.Label>
                                <Form.Control className='input-md' type='text' name='firstname' placeholder='First Name' required />
                            </Form.Group>
                            <Form.Group className='group'>
                                <Form.Label>LAST NAME</Form.Label>
                                <Form.Control className="input-md" type="text" name="lastname" placeholder='Last Name' required />
                            </Form.Group>

                        </div>
                        <div className="row">
                            <Form.Group className='group'>
                                <Form.Label>DATE OF BIRTH</Form.Label>
                                <Form.Control className='input-md' type='date' name='dateofbirth' required />
                            </Form.Group>
                            <Form.Group className='group'>
                                <Form.Label>PAN</Form.Label>
                                <Form.Control className="input-md" type="password" name="pan" placeholder='PAN' required />
                            </Form.Group>
                        </div>
                        <div className="row">

                            <Form.Group className='group'>
                                <Form.Label>MOBILE NUMBER</Form.Label>
                                <Form.Control className='input-md' type='tel' name='mobile' placeholder=' 123-452-6738' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            </Form.Group>
                            <Form.Group className='group'>
                                <Form.Label>GENDER</Form.Label>
                                <Form.Control className="input-md" type="text" name="gender" placeholder='Gender' required />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className='group'>
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control className='input-md' type='email' name='email' placeholder='xyz@email.com' required />
                            </Form.Group>
                            <Form.Group className='group'>
                                <Form.Label>MARITAL STATUS</Form.Label>
                                <Form.Control className="input-md" type="text" name="marital" placeholder='Status' required />
                            </Form.Group>
                        </div>
                    </Col>

                    <Col>
                        <div className='row' style={{marginBottom:"0px"}}>
                            <img src={img} width="250px" />

                        </div>
                        <div className='row'>
                            <p>User name</p>
                        </div>
                        <div className="row">
                            <Button>Update Profile</Button>
                        </div>

                    </Col>
                </div>
            </Form>

        </>
    );
}
export default UserProfile;