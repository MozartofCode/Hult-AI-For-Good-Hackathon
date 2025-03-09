import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ProjectionGraph from "../components/ProjectionGraph";
import MilestoneProgress from "../components/MilestoneProgress";
import FriendsPieChart from "../components/FriendsPieChart";

const HabitsPage = () => {
  // Suggested Habits List
  const suggestedHabits = [
    "Maintain a consistent sleep schedule",
    "Increase daily step count to 10,000",
    "Monitor hydration levels throughout the day",
    "Reduce screen time before bedtime",
    "Perform relaxation exercises to lower stress",
    "Engage in at least 30 minutes of cardio daily",
    "Maintain a balanced diet with sufficient protein",
    "Avoid late-night heavy meals for better sleep",
    "Practice mindfulness and deep breathing",
    "Ensure proper post-workout recovery routines",
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Habits & Projections
      </Typography>

      {/* Projection Graph in a Card */}
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Future Heart Rate Projection
              </Typography>
              <ProjectionGraph />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Second Card: Styled Sections for Milestone Progress + Friends Pie Chart */}
      <Grid container spacing={3} alignItems="stretch" mt={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2, // Ensures proper spacing between sections
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              {/* Milestone Progress Section */}
              <Card
                sx={{
                  p: 2,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: "#E3F2FD", // Light Blue Background
                  borderLeft: "5px solid #1E88E5", // Blue Accent Border
                }}
              >
                <CardContent>
                  <MilestoneProgress />
                </CardContent>
              </Card>

              {/* Friends' Progress Pie Chart */}
              <Card
                sx={{
                  p: 2,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: "#E8F5E9", // Light Green Background
                  borderLeft: "5px solid #43A047", // Green Accent Border
                  mt: 2, // Adds space between the two sections
                }}
              >
                <CardContent>
                  <FriendsPieChart />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card: Suggested Habits */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                Suggested Habits
              </Typography>
              <List>
                {suggestedHabits.map((habit, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`• ${habit}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HabitsPage;
