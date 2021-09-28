import { useState } from "react";
import { postJSON } from "./util";

function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const register = () =>
    postJSON("/register", { name, password }).then(props.setUser).catch(alert);
  const login = () =>
    postJSON("/login", { name, password }).then(props.setUser).catch(alert);

  return (
    <>
      <label>name</label>
      <input onKeyUp={(e) => setName(e.target.value)}></input>
      <label>password</label>
      <input onKeyUp={(e) => setPassword(e.target.value)}></input>
      <button onClick={register}>register</button>
      <button onClick={login}>login</button>
    </>
  );
}

export default Login;
