import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import InsightsGraph from "../components/InsightsGraph";
import LastWeekGraph from "../components/LastWeekGraph";
import { useNavigate } from "react-router-dom";

const InsightsPage = () => {
  const navigate = useNavigate();

  // ✅ State for dynamic insights
  const [insights, setInsights] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState([]);
  const [comparisonSummary, setComparisonSummary] = useState([]);

  // ✅ Fetch insights from backend on component mount
  useEffect(() => {
    async function fetchInsights() {
      try {
        const response = await fetch("http://localhost:5000/getAnalysis");
        if (!response.ok) {
          throw new Error("Failed to fetch insights");
        }
        const data = await response.json();

        // Ensure data.message is an array, or parse it if it's a string
        setInsights(
          Array.isArray(data.message)
            ? data.message
            : typeof data.message === "string"
            ? JSON.parse(data.message)
            : []
        );
      } catch (error) {
        console.error("Error fetching insights:", error);
      }
    }

    async function fetchWeeklySummary() {
      try {
        const response = await fetch("http://localhost:5000/compareLastWeek");
        if (!response.ok) {
          throw new Error("Failed to fetch weekly performance summary");
        }
        const data = await response.json();

        // Ensure data.message is an array, or parse it if it's a string
        setComparisonSummary(
          Array.isArray(data.message)
            ? data.message
            : typeof data.message === "string"
            ? JSON.parse(data.message)
            : []
        );
      } catch (error) {
        console.error("Error fetching weekly comparison:", error);
      }
    }

    fetchInsights();
    fetchWeeklySummary();
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>
        Insights
      </Typography>

      {/* Insights Graph + Health Base Insights */}
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12}>
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
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                alignItems="flex-start"
              >
                {/* Left - Graph */}
                <Box flex={1}>
                  <Typography variant="h6" gutterBottom>
                    Heart Rate Trends & Health Base Insights (Last 6 Hours)
                  </Typography>
                  <InsightsGraph />
                </Box>

                {/* Right - Dynamic Insights */}
                <Card
                  sx={{
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                    backgroundColor: "#E3F2FD",
                    borderLeft: "5px solid #1E88E5",
                    flex: 1,
                    alignSelf: "flex-start",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">Health Base Insights</Typography>
                    <List>
                      {insights.length > 0 ? (
                        insights.map((point, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={`• ${point}`} />
                          </ListItem>
                        ))
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          Loading insights...
                        </Typography>
                      )}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Last Week Heart Rate Trends & Weekly Performance Summary */}
      <Grid container spacing={3} alignItems="stretch" mt={4}>
        <Grid item xs={12}>
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
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                alignItems="flex-start"
              >
                {/* Left - Weekly Trends */}
                <Box flex={1}>
                  <Typography variant="h6" gutterBottom>
                    Last Week Heart Rate Trends & Performance Summary
                  </Typography>
                  <LastWeekGraph />
                </Box>

                {/* Right - Weekly Performance Summary */}
                <Card
                  sx={{
                    p: 2,
                    boxShadow: 2,
                    borderRadius: 2,
                    backgroundColor: "#E8F5E9",
                    borderLeft: "5px solid #43A047",
                    flex: 1,
                    alignSelf: "flex-start",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      Weekly Performance Summary
                    </Typography>
                    <List>
                      {comparisonSummary.length > 0 ? (
                        comparisonSummary.map((summary, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={`• ${summary}`} />
                          </ListItem>
                        ))
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          Loading weekly summary...
                        </Typography>
                      )}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Navigation Button */}
      <Box textAlign="center" mt={8}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/habits")}
          sx={{ px: 4, py: 1.5, fontSize: "1rem", borderRadius: 2 }}
        >
          What's Next?
        </Button>
      </Box>
    </Box>
  );
};

export default InsightsPage;
