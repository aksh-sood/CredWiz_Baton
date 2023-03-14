import react from "react";

const SignInput = (props) => {
  return (
    <div class="input-field">
      <i class={props.icon}></i>

      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
export default SignInput;
