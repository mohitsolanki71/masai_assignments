import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./student.css";

export const Student = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      fetch(`http://localhost:2345/student/${id}`)
        .then((d) => d.json())
        .then((res) => {
          setData(res.student);
          console.log(res.student);
        });
    } catch (e) {
      console.log("error is", e);
    }
  };

  //   console.log("student", data);
  return (
    <div id="studentData">
      <div>
        <p>
          <b>Name: </b> {data.name}
        </p>
        <p>
          <b>Age: </b> {data.age}years
        </p>
        <p>
          <b>Gender: </b> {data.gender}
        </p>
        <p>
          <b>Grade: </b> {data.grade}th
        </p>
        <p>
          <b>Age: </b> {data.age}
        </p>

        <div>
          <b>Test given: </b>{" "}
          {data?.tests?.map((e, i) => (
            <div key={i} className="detailDiv">
              <span>
                <b>Subject: </b>
                {e.subject} ||
              </span>
              <span>
                <b> Marks:</b> {e.marks} ||
              </span>
              <span>
                <b> Date of exam:</b>
                {e.date}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img className="userImage" src={data.image}></img>
      </div>
    </div>
  );
};
