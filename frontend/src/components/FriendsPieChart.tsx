import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { name: "Completed", value: 60 },
  { name: "In Progress", value: 30 },
  { name: "Not Started", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const FriendsPieChart: React.FC = () => {
  return (
    <Box width="100%" p={2}>
      <Typography variant="h6">Friends' Progress</Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default FriendsPieChart;
