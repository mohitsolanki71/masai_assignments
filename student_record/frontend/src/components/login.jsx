import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./login.css";

export const Login = () => {
  const [form, setForm] = useState([]);
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
    fetch(`http://localhost:2345/teacher/${form.email}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("its res", res);

        if (res.user._id) {
          if (localStorage.getItem("userToken") === null) {
            localStorage.setItem("userToken", JSON.stringify(res.user._id));
          } else {
            localStorage.setItem("userToken", JSON.stringify(res.user._id));
          }
          handleToken(res.user._id);
          alert("login success");
          navigate("/student");
        } else {
          alert(res.error);
        }
      });
  };

  return (
    <div id="loginBox">
      <input
        type="text"
        name="email"
        placeholder="Enter email here"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
