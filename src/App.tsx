import "./App.css";
import SignIn from "./pages/signIn";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from "./pages/watchlist";
import CreateAccount from "./pages/createaccount";
import Login from "./pages/login";
import MoviesPage from "./pages/moviespage";
import Tv from "./pages/tv";
import PopularMovies from "./pages/popularMovie";
import Upcoming from "./pages/upcoming";
import PopularTv from "./pages/popularTv/PopularTv";
import ShowMovie from "./pages/showMovie";
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/populartv" element={<PopularTv />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/show" element={<ShowMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
