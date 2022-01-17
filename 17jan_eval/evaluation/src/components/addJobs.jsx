import { useState } from "react";
import "./addJob.css";
import { useDispatch } from "react-redux";
import { addJobs } from "../features/action";
export const AddJobs = () => {
  const [form, setForm] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3004/jobs", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        alert("job added successfully");
        dispatch(addJobs(res));
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <input
          name="comapany_name"
          type="text"
          placeholder="Company Name"
          onChange={handleChange}
        ></input>
        <input
          name="job_title"
          type="text"
          placeholder="job title"
          onChange={handleChange}
        ></input>
        <input
          name="salary_range"
          type="number"
          placeholder="salary range"
          onChange={handleChange}
        ></input>
        <input
          name="job_discription"
          type="text"
          placeholder="Job Discription"
          onChange={handleChange}
        ></input>
        <input
          name="location"
          type="text"
          placeholder="Location"
          onChange={handleChange}
        ></input>
        <input
          name="job_type"
          type="text"
          placeholder="job type"
          onChange={handleChange}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};
