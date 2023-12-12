import "./App.css";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        direction="column"
        sx={{ backgroundColor: "#212121", color: "white" }}
        height="100%"
      >
        <Heading />
        <SearchBar />
      </Stack>
    </>
  );
}

export default App;
