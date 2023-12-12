import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { fetchMovies } from "./SearchMovie";
import ActionAreaCard from "./ActionAreaCard";
import NoResult from "./NoResult";

const SearchBar = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (name) => {
    setMovieName(name);
    const movieArray = await fetchMovies(movieName);
    setMovies(movieArray);
    setMovieName("");
  };

  useEffect(() => {
    if (movieName.trim() === "") {
      handleSubmit();
    }
  }, []);

  return (
    <>
      <Box align="center" p={3}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search"
            className="input-area"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <div onClick={handleSubmit}>
            <SearchIcon className="search-icon" />
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        width="100%"
      >
        {movies.length ? (
          movies.map((movie) => (
            <ActionAreaCard
              poster={movie.Poster}
              title={movie.Title}
              plot={movie.Plot}
              year={movie.Year}
              type={movie.Type}
            />
          ))
        ) : (
          <NoResult />
        )}
      </Box>
    </>
  );
};

export default SearchBar;
