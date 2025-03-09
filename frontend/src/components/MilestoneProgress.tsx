import { Box, LinearProgress, Typography } from "@mui/material";

const MilestoneProgress: React.FC = () => {
  const progress = 70; // Example: 70% completed

  return (
    <Box width="100%" p={2}>
      <Typography variant="h6">Milestone Completion</Typography>
      <Typography variant="body2">{progress}% completed</Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, mt: 1 }}
      />
    </Box>
  );
};

export default MilestoneProgress;
