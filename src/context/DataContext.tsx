import { createContext, useEffect, useState, useContext } from "react";
import {
  IsConnectedContextProps,
  IsConnectedProviderProps,
  MovieDetails,
  TvDetails,
  UserInterface,
  RequestOptions,
  List,
} from "./constants";
import axios, { AxiosResponse, AxiosError } from "axios";

const IsConnectedContext = createContext<IsConnectedContextProps>({
  isConnected: false,
  setIsConnected: () => {},
});

export const useIsConnected = (): IsConnectedContextProps => {
  return useContext(IsConnectedContext);
};

export const IsConnectedProvider = ({ children }: IsConnectedProviderProps) => {
  const [isConnected, setIsConnected] = useState(() => {
    const storedValue: string | null = localStorage.getItem("isConnected");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isConnected", JSON.stringify(isConnected));
  }, [isConnected]);

  return (
    <IsConnectedContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </IsConnectedContext.Provider>
  );
};

const DataContext = createContext<any>({});
export const DataProvider = ({ children }: any) => {
  const [usersList, setUsersList] = useState<UserInterface[]>(() => {
    const storedUsersList = localStorage.getItem("UsersList");
    return storedUsersList ? JSON.parse(storedUsersList) : [];
  });

  useEffect(() => {
    localStorage.setItem("UsersList", JSON.stringify(usersList));
  }, [usersList]);

  const [account, setAccount] = useState<string>(() => {
    const storedAccount = localStorage.getItem("Account");
    return storedAccount ? JSON.parse(storedAccount) : "";
  });
  useEffect(() => {
    localStorage.setItem("Account", JSON.stringify(account));
  }, [account]);

  const [lists, setLists] = useState<List[]>(() => {
    const storedLists = localStorage.getItem("Lists");
    return storedLists ? JSON.parse(storedLists) : [];
  });
  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));
  }, [lists]);
  const [postData, setPostData] = useState<TvDetails | MovieDetails>();
  const [dayTrends, setDayTrends] = useState<MovieDetails[]>([]);
  const [weekTrends, setWeekTrends] = useState<MovieDetails[]>([]);
  const [popular, setPopular] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1`;
    const options: RequestOptions = {
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0ODY0NjlkY2ZjNjhkMjkzMjg1ZTZkZDAzNmI4NyIsInN1YiI6IjY0YTQ2NzA3ZGExMGYwMDBhZGYzZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUIRrRQmJzTVUP3qx7xUxITVhHdVVnbSYm5rSOScfVY",
      },
    };
    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setDayTrends(response.data.results);
      })
      .catch(function (error: AxiosError) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1`;
    const options: RequestOptions = {
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0ODY0NjlkY2ZjNjhkMjkzMjg1ZTZkZDAzNmI4NyIsInN1YiI6IjY0YTQ2NzA3ZGExMGYwMDBhZGYzZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUIRrRQmJzTVUP3qx7xUxITVhHdVVnbSYm5rSOScfVY",
      },
    };
    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setWeekTrends(response.data.results);
      })
      .catch(function (error: AxiosError) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
    const options: RequestOptions = {
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGU0ODY0NjlkY2ZjNjhkMjkzMjg1ZTZkZDAzNmI4NyIsInN1YiI6IjY0YTQ2NzA3ZGExMGYwMDBhZGYzZjA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUIRrRQmJzTVUP3qx7xUxITVhHdVVnbSYm5rSOScfVY",
      },
    };
    axios
      .request(options)
      .then(function (response: AxiosResponse) {
        setPopular(response.data.results);
      })
      .catch(function (error: AxiosError) {
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        usersList,
        setUsersList,
        postData,
        setPostData,
        dayTrends,
        setDayTrends,
        weekTrends,
        setWeekTrends,
        popular,
        setPopular,
        account,
        setAccount,
        lists,
        setLists,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
