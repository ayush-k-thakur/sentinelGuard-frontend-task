import React from "react";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

const networkTrafficData = [
  { name: "HTTP", uv: 4000, pv: 2400, amt: 2400 },
  { name: "FTP", uv: 3000, pv: 1398, amt: 2210 },
  { name: "SSH", uv: 2000, pv: 9800, amt: 2290 },
  { name: "SMTP", uv: 2780, pv: 3908, amt: 2000 },
  { name: "SNMP", uv: 1890, pv: 4800, amt: 2181 },
];

function Network({ mode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col space-y-4 mt-10 sm:mt-16 items-center">
      <div className="h-[300px] w-[360px] sm:w-[500px] mr-[15px]">
        <ResponsiveContainer>
          <LineChart data={networkTrafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        className={`${
          mode === "light" ? "text-zinc-800" : "text-zinc-400"
        } w-[300px] sm:w-[400px] text-justify`}
      >
        <div>
          <ul>
            <li>
              <span style={{ color: "#8884d8" }}>pv (Page Views): </span>
              <span className="legend-label">
                Indicates the number of times the malware was encountered.
              </span>
            </li>
            <li>
              <span style={{ color: "#82ca9d" }}>uv (Unique Visitors): </span>
              <span>
                Represents the unique individuals who interacted with the
                malware.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Network;
