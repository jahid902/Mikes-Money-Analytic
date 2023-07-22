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
          Employee: 40,
          Employer: 20,
          Interest: 10,
          amt: 300
        },
        {
          name: "25",
          Employee: 50,
          Employer: 30,
          Interest: 20,
          amt: 300
        },
        {
          name: "30",
          Employee: 70,
          Employer: 50,
          Interest: 30,
          amt: 300
        },
        {
          name: "35",
          Employee: 90,
          Employer: 60,
          Interest: 40,
          amt: 300
        },
        {
          name: "40",
          Employee: 100,
          Employer: 70,
          Interest: 60,
          amt: 300
        },
        {
          name: "45",
          Employee: 140,
          Employer: 100,
          Interest: 80,
          amt: 300
        },
        {
          name: "50",
          Employee: 150,
          Employer: 130,
          Interest: 100,
          amt: 300
        },
        {
          name: "55",
          Employee: 180,
          Employer: 150,
          Interest: 120,
          amt: 300
        },
        {
          name: "60",
          Employee: 200,
          Employer: 180,
          Interest: 150,
          amt: 300
        },
        {
          name: "65",
          Employee: 230,
          Employer: 200,
          Interest: 180,
          amt: 300
        },
        {
          name: "70",
          Employee: 250,
          Employer: 210,
          Interest: 200,
          amt: 300
        },
        {
          name: "75",
          Employee: 270,
          Employer: 240,
          Interest: 220,
          amt: 300
        },
        {
          name: "80",
          Employee: 290,
          Employer: 270,
          Interest: 250,
          amt: 300
        },
        {
          name: "90",
          Employee: 300,
          Employer: 280,
          Interest: 270,
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
      <Bar dataKey="Employee" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Employer" stackId="a" fill="#8884d8" />
      <Bar dataKey="Interest" stackId="a" fill="#212B36" />
    </BarChart>
    </ResponsiveContainer>
    </>
  );
};

export default MoneyChart;
