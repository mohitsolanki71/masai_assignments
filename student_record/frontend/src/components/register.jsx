import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [form, setForm] = useState([]);
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const register = () => {
    fetch(`http://localhost:2345/teacher`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          alert("User Already Registered !!");
        } else {
          alert("User Registered Successfully !!");
          navigate("/login");
        }
      });
  };

  return (
    <div id="regBox">
      <h1>Register</h1>
      <input
        type="text"
        onChange={handleChange}
        name="first_name"
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={handleChange}
        name="last_name"
        placeholder="Last Name"
      />
      <input
        type="text"
        onChange={handleChange}
        name="gender"
        placeholder="Gender"
      />
      <input
        type="number"
        onChange={handleChange}
        name="age"
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
        type="text"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      <button id="regButton" onClick={register}>
        Register
      </button>
      <p id="logLine">
        {" "}
        Already Registered ?{" "}
        <Link id="logLink" to={"/login"}>
          Log in
        </Link>
      </p>
    </div>
  );
};
