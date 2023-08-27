import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import './Container.css'

const Container = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/attachment/?title=${title}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [title]);

  return (
    <div>
      <h3>{title}</h3>
      <div className="containerWrap">
      {
        data.map((item) => (
        <Card key={item._id} data={item} />
      ))}
      </div>
    </div>
  );
};

export default Container;
