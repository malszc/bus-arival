import React, { useEffect } from "react";

const Bus = props => {
  return (
    <tr>
      <th>{props.data.routeId}</th>
      <th>{props.data.headsign}</th>
      <th>{props.data.estimatedTime}</th>
    </tr>
  );
};

export default Bus;
