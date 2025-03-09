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
  { day: "Mon", heartRate: 76 },
  { day: "Tue", heartRate: 79 },
  { day: "Wed", heartRate: 81 },
  { day: "Thu", heartRate: 75 },
  { day: "Fri", heartRate: 78 },
  { day: "Sat", heartRate: 80 },
  { day: "Sun", heartRate: 77 },
];

const LastWeekGraph: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h6" gutterBottom>
        Last Week Heart Rate Trends
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis domain={[70, 85]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="heartRate"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LastWeekGraph;
