import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";

const MoneyChart = () => {
    const data = [
        {
          name: "20",
          uv: 40,
          pv: 20,
          jv: 10,
          amt: 300
        },
        {
          name: "25",
          uv: 50,
          pv: 30,
          jv: 20,
          amt: 300
        },
        {
          name: "30",
          uv: 70,
          pv: 50,
          jv: 30,
          amt: 300
        },
        {
          name: "35",
          uv: 90,
          pv: 60,
          jv: 40,
          amt: 300
        },
        {
          name: "40",
          uv: 100,
          pv: 70,
          jv: 60,
          amt: 300
        },
        {
          name: "45",
          uv: 140,
          pv: 100,
          jv: 80,
          amt: 300
        },
        {
          name: "50",
          uv: 150,
          pv: 130,
          jv: 100,
          amt: 300
        },
        {
          name: "55",
          uv: 180,
          pv: 150,
          jv: 120,
          amt: 300
        },
        {
          name: "60",
          uv: 200,
          pv: 180,
          jv: 150,
          amt: 300
        },
        {
          name: "65",
          uv: 230,
          pv: 200,
          jv: 180,
          amt: 300
        },
        {
          name: "70",
          uv: 250,
          pv: 210,
          jv: 200,
          amt: 300
        },
        {
          name: "75",
          uv: 270,
          pv: 240,
          jv: 220,
          amt: 300
        },
        {
          name: "80",
          uv: 290,
          pv: 270,
          jv: 250,
          amt: 300
        },
        {
          name: "90",
          uv: 300,
          pv: 280,
          jv: 270,
          amt: 300
        },
        
      ];

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 30,
        bottom: 15
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      <Bar dataKey="jv" stackId="a" fill="#212B36" />
    </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default MoneyChart;
