import { useEffect, useState } from "react";

export const GetJob = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3004/jobs")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
      });
  };

  console.log(data);

  return <div></div>;
};
