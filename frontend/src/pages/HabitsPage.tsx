import { useState, useEffect } from "react";
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
  // ✅ State to store habits
  const [suggestedHabits, setSuggestedHabits] = useState([]);

  // ✅ Fetch habits from backend on component mount
  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await fetch("http://localhost:5000/getHabits"); // FIXED URL
        if (!response.ok) {
          throw new Error("Failed to fetch habits");
        }
        const data = await response.json();
        setSuggestedHabits(Array.isArray(data.message) ? data.message : (typeof data.message === 'string' ? JSON.parse(data.message) : []));
        
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    }

    fetchHabits();
  }, []);

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

      {/* Second Card: Milestone Progress + Friends Pie Chart */}
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
              gap: 2,
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Card
                sx={{
                  p: 2,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: "#E3F2FD",
                  borderLeft: "5px solid #1E88E5",
                }}
              >
                <CardContent>
                  <MilestoneProgress />
                </CardContent>
              </Card>

              <Card
                sx={{
                  p: 2,
                  boxShadow: 2,
                  borderRadius: 2,
                  backgroundColor: "#E8F5E9",
                  borderLeft: "5px solid #43A047",
                  mt: 2,
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
                {suggestedHabits.length > 0 ? (
                  suggestedHabits.map((habit, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={`• ${habit}`} />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    Loading habits...
                  </Typography>
                )}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HabitsPage;
