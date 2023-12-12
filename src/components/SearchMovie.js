import axios from "axios";

export const fetchMovies = async (movieName) => {
  try {
    movieName = movieName || "one piece";
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=1ec20371&s=${movieName}`;
    const {
      data: { Search, Response, Error: errorMessage },
    } = await axios.get(url);

    if (Response === "False") {
      throw new Error(errorMessage);
    }

    return Search;
  } catch (error) {
    const Search = [];
    return Search;
  }
};

// const url = `https://www.omdbapi.com/?i=tt3896198&apikey=1ec20371&s=superman`;
