import { useState, useEffect } from "react";
import Logout from "./Logout";
import Login from "./Login";
import Shortens from "./Shorten";
import { getJSON } from "./util";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getJSON("/me")
      .then(setUser)
      .catch(() => {});
  }, []);
  if (!user) {
    return <Login setUser={setUser}></Login>;
  } else {
    return (
      <>
        <Logout user={user} setUser={setUser}></Logout>
        <br />
        <Shortens></Shortens>
      </>
    );
  }
}

export default App;
