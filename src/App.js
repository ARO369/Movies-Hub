import "./App.css";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack
        direction="column"
        className="main-area"
        height="100%"
      >
        <Heading />
        <SearchBar />
      </Stack>
    </>
  );
}

export default App;
