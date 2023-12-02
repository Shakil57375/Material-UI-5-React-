import { Button, styled } from "@mui/material";
import "./App.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#000",
    margin: 5,
    "&hover": {
      backgroundColor: "lightblue",
    },
    // when disabled it will work
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
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
      <BlueButton>My Unique Button</BlueButton>
    </>
  );
}

export default App;
