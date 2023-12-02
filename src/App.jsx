import { Button } from "@mui/material";
import "./App.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button startIcon={<AddIcon />} variant="outlined">
        Outlined
      </Button>
    </>
  );
}

export default App;
