import {
  Search,
  HeaderContainer,
  HeaderLeftSection,
  HeaderLogo,
  HeaderNavContainer,
  Button,
  MenuNavLink,
  NavLink,
  MenuContainer,
  SearchResultsContainer,
  MovieTitle,
  MovieContainer,
  MovieBodyContainer,
  MovieImg,
  DateContainer,
} from "./styles";
import axios from "axios";
import { useIsConnected } from "../../context/DataContext";
import logo from "./logo.png";
import { useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import { MovieDetails } from "../../context/constants";
import { useNavigate, NavigateFunction } from "react-router-dom";
const Header = (): JSX.Element => {
  const { isConnected, setIsConnected } = useIsConnected();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const navigate: NavigateFunction = useNavigate();
  const watchlistRoute: string = isConnected ? "/watchlist" : "/signin";
  const handleSignOut = () => {
    setIsConnected(false);
  };
  const { setPostData } = useContext(DataContext);
  const [searchItem, setSearchItem] = useState<string>("");
  const [searchResults, setSearchResults] = useState<MovieDetails[]>([]);
  const handleDataChange = ({ movie }: { movie: MovieDetails }) => {
    setPostData(movie);
    navigate("/show");
  };
  const handleReturnHome = () => {
    navigate("/");
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchItem = event.target.value.slice(0, 50);
    setSearchItem(newSearchItem);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/multi?query=${newSearchItem}&include_adult=false&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0ODY0NjlkY2ZjNjhkMjkzMjg1ZTZkZDAzNmI4NyIsInN1YiI6IjY0YTQ2NzA3ZGExMGYwMDBhZGYzZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUIRrRQmJzTVUP3qx7xUxITVhHdVVnbSYm5rSOScfVY",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setSearchResults(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    let newSearchResList: MovieDetails[] = searchResults.filter(
      (e) => e.media_type !== "people" && e.overview !== null
    );
    setSearchResults(newSearchResList);
  };
  return (
    <HeaderContainer>
      <HeaderLeftSection>
        <HeaderLogo src={logo} onClick={handleReturnHome} />
        <Button onClick={handleOpenMenu}>Menu</Button>
        {isOpenMenu && (
          <MenuContainer>
            <MenuNavLink to="/" onClick={handleOpenMenu}>
              Home
            </MenuNavLink>
            <MenuNavLink to="/movies" onClick={handleOpenMenu}>
              Movies
            </MenuNavLink>
            <MenuNavLink to="/popularmovies" onClick={handleOpenMenu}>
              Popular Movies
            </MenuNavLink>
            <MenuNavLink to="/tv" onClick={handleOpenMenu}>
              Tv Shows
            </MenuNavLink>
            <MenuNavLink to="/populartv" onClick={handleOpenMenu}>
              Popular Tv Shows
            </MenuNavLink>
            <MenuNavLink to="/upcoming" onClick={handleOpenMenu}>
              Upcoming
            </MenuNavLink>
          </MenuContainer>
        )}
      </HeaderLeftSection>
      <Search
        type="text"
        placeholder="Search"
        required
        value={searchItem.slice(0, 50)}
        onChange={handleSearch}
      />
      {searchItem !== "" && (
        <SearchResultsContainer>
          {searchResults.slice(0, 4).map((e) => (
            <MovieContainer key={e.id}>
              <MovieBodyContainer
                onClick={() => handleDataChange({ movie: e })}
              >
                <MovieImg
                  src={`http://image.tmdb.org/t/p/w500/${e.poster_path}`}
                />
                <DateContainer>
                  <MovieTitle>{e.title ? e.title : e.name}</MovieTitle>
                </DateContainer>
              </MovieBodyContainer>
            </MovieContainer>
          ))}
        </SearchResultsContainer>
      )}

      <HeaderNavContainer>
        <NavLink to="/">Home</NavLink>
        {!isConnected ? (
          <NavLink to="/signin">Sign In</NavLink>
        ) : (
          <Button onClick={handleSignOut}>Sign Out</Button>
        )}
        <NavLink to={watchlistRoute}>Watchlist</NavLink>
      </HeaderNavContainer>
    </HeaderContainer>
  );
};

export default Header;
