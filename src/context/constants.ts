import { ReactNode } from "react";
export interface IsConnectedContextProps {
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
}

export interface IsConnectedProviderProps {
  children: ReactNode;
}
export interface UserInterface {
  name: string;
  email: string;
  password: string;
}
export interface MovieDetails {
  adult: boolean;
  media_type?: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title?: string;
  name?: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
export interface TvDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  name: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
export interface RequestOptions {
  method: string;
  url: string;
  headers: {
    accept: string;
    Authorization: string;
  };
}
export interface List {
  elements: MovieDetails[];
  owner: string;
}
