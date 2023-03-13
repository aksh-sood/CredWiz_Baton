import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInput = (props) => {
  return (
    <div class="input-field">
      <i class={props.icon}></i>
      {/* <FontAwesomeIcon icon="check-square" /> */}
      <FontAwesomeIcon icon="fa-brands fa-bootstrap" />
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
export default SignInput;
