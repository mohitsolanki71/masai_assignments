import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
export const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [value, setValue] = useState("0");
  const [filter, setFilter] = useState("0");

  useEffect(() => {
    getData();
  }, [page, value, filter]);

  console.log("data", data);
  console.log("limit", limit);
  const getData = () => {
    try {
      fetch(
        `http://localhost:2345/student/${filter}/${value}?page=${page}&size=3`
      )
        .then((d) => d.json())
        .then((res) => {
          setData(res.student);
          setLimit(res.totalPage);
          console.log("inside sort", res.student);
        });
    } catch (e) {
      console.log("error is", e);
    }
  };

  const handlePrev = () => {
    setPage((p) => p - 1);
  };

  const handleNext = () => {
    setPage((p) => p + 1);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div id="allInformation">
      <div id="sideDiv">
        <div>
          <p className="sideText">Sort By Age</p>
          <select id="sortSelect" onChange={handleValue}>
            <option value="0">Select Range</option>
            <option value="-1">High</option>
            <option value="1">Low</option>
          </select>
        </div>

        <div>
          <p className="sideText">Filter by Gender</p>
          <select id="sortSelect" onChange={handleFilter}>
            <option value="0">Select filter</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div id="tableDiv">
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>No of tests</th>
            <th>Profile</th>
          </tr>
          {data.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.gender}</td>
              <td>{e.grade}</td>
              <td>{e.tests.length}</td>
              <td>
                <Link to={`/student/${e._id}`}>
                  <img className="profile" src={e.image}></img>
                </Link>
              </td>
            </tr>
          ))}
        </table>

        <button
          disabled={page === 1}
          className="pageButton"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          disabled={page === limit}
          className="pageButton"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
