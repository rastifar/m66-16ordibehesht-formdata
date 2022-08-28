import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {setUser} from "../store/userSlice"

function Login(props) {
  const [user, setUserState] = useState({});
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value };
    setUserState(_user);
  };
  const handleSubmit = () => {
      dispatch(setUser(user))
  };

  return (
    <div>
      <input onChange={inputChangeHandler} type="text" name={"username"} />
      <input onChange={inputChangeHandler} type="password" name={"password"} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
