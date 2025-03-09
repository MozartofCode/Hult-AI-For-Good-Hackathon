import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InsightsPage from "./pages/InsightsPage";
import HabitsPage from "./pages/HabitsPage";
import { Box, Button } from "@mui/material";

function App() {
  return (
    <Box>
      {/* Navigation */}
      <Box display="flex" gap={2} p={2} bgcolor="lightgray">
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/insights">
          Insights
        </Button>
        <Button component={Link} to="/habits">
          Habits
        </Button>
      </Box>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/habits" element={<HabitsPage />} />
      </Routes>
    </Box>
  );
}

export default App;
