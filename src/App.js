import { useState,useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    getJSON("/me").then(setUser).catch(()=>{});
  },[])
  if (!user) {
    return <Login setUser={setUser}></Login>;
  } else {
    return <>
      <Logout user={user} setUser={setUser}></Logout>
    </>;
  }
}

function Logout(props) {
  const logout = () =>
    postJSON("/logout").then(() => props.setUser(null)).catch(alert);
  return (
    <>
      <div>hello, {props.user.name}</div>
      <button onClick={() => logout()}>logout</button>
    </>
  );
}

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

export default App;

const baseURL = "http://localhost:9999";
async function postJSON(path, data) {
  return fetch(baseURL + path, {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    withCredentials: true
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      } else {
        return res;
      }
    })
    .then((res) => res.json());
}

async function getJSON(path) {
  return fetch(baseURL + path,{
    method: 'GET',
    headers:{"accept": 'application/json'},
    credentials: 'include',
    withCredentials:true,
})
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      } else {
        return res;
      }
    })
    .then((res) => res.json());
}