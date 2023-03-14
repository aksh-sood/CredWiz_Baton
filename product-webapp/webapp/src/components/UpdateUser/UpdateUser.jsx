import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import './UpdateUser.css';
import img from "../../assets/person.svg"

const UpdateUser = () => {
    return (
        <>
            <Row>
                <Col id="head">
                    <h2>Update user</h2>
                </Col>
                <Col className="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"  class="bi bi-person" viewBox="-2 -2 20 20">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                </Col>
            </Row>
        </>
    );
}
export default UpdateUser;