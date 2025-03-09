import { Switch, Typography, Box } from "@mui/material";
import { useState } from "react";

const LabModeToggle: React.FC = () => {
  const [labMode, setLabMode] = useState(false);

  return (
    <Box display="flex" alignItems="center" gap={2} p={2}>
      <Typography>Lab Mode</Typography>
      <Switch checked={labMode} onChange={() => setLabMode(!labMode)} />
    </Box>
  );
};

export default LabModeToggle;
