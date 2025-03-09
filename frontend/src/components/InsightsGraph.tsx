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
  { time: "12 AM", heartRate: 75 },
  { time: "2 AM", heartRate: 78 },
  { time: "4 AM", heartRate: 80 },
  { time: "6 AM", heartRate: 74 },
  { time: "8 AM", heartRate: 77 },
];

const InsightsGraph: React.FC = () => {
  return (
    <Box p={3}>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis domain={[70, 85]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default InsightsGraph;
