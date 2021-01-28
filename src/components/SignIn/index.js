import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../redux/User/user.actions";
import { useHistory, Link } from "react-router-dom";
import FormWrapper from "../FormWrapper";
import FormInput from "../forms/FormInput";
import FormButton from "../forms/FormButton";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <FormWrapper title="Login">
      <form onSubmit={handleSubmit}>
        <FormInput
          value={email}
          type="text"
          placeholder="email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <FormInput
          value={password}
          type="text"
          placeholder="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <FormButton type="submit">submit</FormButton>
      </form>
      <div className="links">
        <Link to="/recovery">Reset Password</Link>
      </div>
    </FormWrapper>
  );
}

export default SignIn;
