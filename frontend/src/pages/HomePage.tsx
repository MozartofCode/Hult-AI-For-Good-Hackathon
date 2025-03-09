import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Checkbox,
  Typography,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import WatchIcon from "@mui/icons-material/Watch"; // Generic for Garmin
import RingVolumeIcon from "@mui/icons-material/RingVolume"; // For Ring
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Clock Icon for Coming Soon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // ✅ CHECK ICON
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"; // ⬜ EMPTY CHECKBOX

const HomePage = () => {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);
  const [labMode, setLabMode] = useState(false);
  const navigate = useNavigate();

  // Device options with icons & colors
  const devices = [
    { name: "Apple", icon: <AppleIcon fontSize="large" />, color: "#FFE5E5" }, // Softer Light Red
    { name: "Garmin", icon: <WatchIcon fontSize="large" />, color: "#E3F2FD" }, // Softer Light Blue
    {
      name: "Ring",
      icon: <RingVolumeIcon fontSize="large" />,
      color: "#E8F5E9",
    }, // Softer Light Green
  ];

  // Handle device selection (toggle)
  const toggleDeviceSelection = (deviceName: string) => {
    setSelectedDevices(
      (prev) =>
        prev.includes(deviceName)
          ? prev.filter((device) => device !== deviceName) // Remove if already selected
          : [...prev, deviceName] // Add if not selected
    );
  };

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8f9fa, #dde2e7)", // Softer gradient
      }}
    >
      {/* Device Selection Grid */}
      <Grid container spacing={3} justifyContent="center">
        {devices.map((device) => (
          <Grid item xs={12} sm={4} key={device.name}>
            <Card
              sx={{
                p: 2,
                boxShadow: 2,
                borderRadius: 2,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundColor: device.color, // Softer background colors
              }}
            >
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {device.icon}
                  <Typography variant="h6" mt={1}>
                    {device.name}
                  </Typography>
                </Box>
              </CardContent>
              {/* Circular Checkbox for Multi-Select */}
              <Checkbox
                checked={selectedDevices.includes(device.name)}
                onChange={() => toggleDeviceSelection(device.name)}
                icon={<CheckBoxOutlineBlankIcon fontSize="large" />} // Empty Checkbox
                checkedIcon={
                  <CheckCircleIcon fontSize="large" sx={{ color: "green" }} />
                } // Green Checkmark
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              />
            </Card>
          </Grid>
        ))}

        {/* Coming Soon Card (Toned Down Color) */}
        <Grid item xs={12} sm={4} mt={8}>
          <Card
            sx={{
              p: 2,
              boxShadow: 2,
              borderRadius: 2,
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F9F3E3", // Softer muted yellow
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <AccessTimeIcon fontSize="large" />
                <Typography variant="h6" mt={1}>
                  Coming Soon
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Lab Mode Toggle */}
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h6">Lab Mode</Typography>
        <Switch checked={labMode} onChange={() => setLabMode(!labMode)} />
      </Box>

      {/* Navigation Button */}
      {!labMode && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/insights")}
          sx={{
            mt: 4,
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            borderRadius: 2,
            backgroundColor: selectedDevices.length > 0 ? "#007FFF" : "#ccc", // Disabled state color
            "&:hover": {
              backgroundColor: selectedDevices.length > 0 ? "#005BBB" : "#aaa",
            },
          }}
          disabled={selectedDevices.length === 0} // Disable button if no device is selected
        >
          Go to Insights
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
