import React, { useState, useEffect } from "react";
import Bus from "./Bus.js";

const useFetch = url => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  return data;
};

const Stop = props => {
  const resp = useFetch(
    `https://cors-anywhere.herokuapp.com/http://ckan2.multimediagdansk.pl/delays?stopId=${props.stopId}`
  );
  const buses = resp && resp.delay;

  return (
    <div className="stop">
      <h2>{props.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Nr.</th>
            <th>Kierunek</th>
            <th>Przyjazd</th>
          </tr>
        </thead>
        <tbody>
          {buses &&
            buses.map((bus, i) => {
              return <Bus key={i} data={bus} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Stop;
