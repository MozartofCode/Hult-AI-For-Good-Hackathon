import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { day: "Today", heartRate: 78 },
  { day: "Tomorrow", heartRate: 77 },
  { day: "Day 3", heartRate: 76 },
  { day: "Day 4", heartRate: 75 },
  { day: "Day 5", heartRate: 74 },
  { day: "Day 6", heartRate: 73 },
  { day: "Day 7", heartRate: 72 },
];

const ProjectionGraph: React.FC = () => {
  return (
    <Box p={3}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis domain={[70, 85]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#ff7300"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ProjectionGraph;
