import { useEffect } from "react";
import "./getJob.css";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../features/action";

export const GetJob = () => {
  const data = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3004/jobs")
      .then((data) => data.json())
      .then((res) => {
        dispatch(getJobs(res));
      });
  };

  console.log(data);

  const sortHigh = () => {
    fetch("http://localhost:3004/jobs?_sort=salary_range&_order=desc")
      .then((data) => data.json())
      .then((res) => {
        dispatch(getJobs(res));
      });
  };

  const sortLow = () => {
    fetch("http://localhost:3004/jobs?_sort=salary_range&_order=asc")
      .then((data) => data.json())
      .then((res) => {
        dispatch(getJobs(res));
      });
  };

  return (
    <div id="outputContainer">
      <div id="function_button">
        <button onClick={sortHigh}>Sort high</button>
        <button onClick={sortLow}>Sort low</button>
      </div>

      {data.map((e, i) => (
        <div key={i} className="element">
          <p>
            <b>comapany name: </b> {e.comapany_name}
          </p>
          <p>
            <b>job_title: </b>
            {e.job_title}
          </p>
          <p>
            <b>Salary: </b>
            {e.salary_range}
          </p>
          <p>
            <b>Discription: </b>
            {e.job_discription}
          </p>
          <p>
            <b>Location: </b>
            {e.location}
          </p>
          <p>
            <b>Job Type: </b>
            {e.job_type}
          </p>
        </div>
      ))}
    </div>
  );
};
