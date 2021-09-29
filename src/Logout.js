import { postJSON } from "./util";

function Logout(props) {
  const logout = () =>
    postJSON("/logout")
      .then(() => props.setUser(null))
      .catch(alert);
  return (
    <div>
      hello, {props.user.name}
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}

export default Logout;
