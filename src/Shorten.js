import { useState, useEffect } from "react";
import { getJSON, postJSON } from "./util";

function Shortens() {
  const [origin, setOrigin] = useState("");
  const [links, setLinks] = useState([]);
  const loadData = () => {
    getJSON("/link").then(setLinks);
  };
  useEffect(loadData, []);
  const createLink = () => {
    postJSON("/link", { url: origin })
      .then(() => loadData())
      .catch(() => alert("invalid url"));
  };
  return (
    <>
      <label>url</label>
      <input onKeyUp={(e) => setOrigin(e.target.value)}></input>
      <button onClick={createLink}>Create!</button>
      <table>
        <thead>
          <tr>
            <td>origin</td>
            <td>shorten</td>
          </tr>
        </thead>
        <tbody>
          {links.map((link) => (
            <tr key={link.id}>
              <td>
                <a href={link.orgin}>{link.origin}</a>
              </td>
              <td>
                <a href={"http://localhost:9999/r/" + link.shorten}>
                  {link.shorten}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Shortens;
