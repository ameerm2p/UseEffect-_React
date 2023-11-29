import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("One time useEffect"), []);
  useEffect(() => console.log("empty dependency useEffect"));
  useEffect(() => console.log(count), [count]);

  const [username, setUsername] = useState("");
  const handler = (e) => {
    setUsername(e.target.value);
  };

  //const [email,setEmail]=useState("");
  //const[passwors, setPassword]=useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onchangehandler = (e) => {
    setData(({
      ...data,
     // [e.target.name]: [e.target.value]  array
     [e.target.name]: e.target.value
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(data.email);
    console.log(data.password);
  };
  return (
    <div className="App">
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br></br>
      <div>
        <center>
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            onChange={handler}
          ></input>
        </center>
        <p>Username: {username}</p>
      </div>
      <br></br>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="email"
            value={data.email}
            name="email"
            onChange={onchangehandler}
          ></input> <br></br> <br></br>
          <input
            type="text"
            placeholder="password"
            value={data.password}
            name="password"
            onChange={onchangehandler}
          ></input> <br></br> <br></br>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}
export default App;
