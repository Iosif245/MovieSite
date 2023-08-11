import * as Router from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  display: flex;
  width: 100vw;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 20;
`;
export const HeaderLeftSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex-direction: row;
  z-index: 10;
`;
export const HeaderLogo = styled.img`
  height: 45px;
  width: 70px;
  margin-left: 40px;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 60px;
  margin-right: 40px;
  align-self: center;
  z-index: 100;
  align-items: center;
  background: transparent;
`;
export const NavLink = styled(Router.Link)`
  background-color: transparent;
  transition: 0.5s;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gold};
  }
`;

export const Search = styled.input`
  background-color: ${(props) => props.theme.colors.white};
  width: 500px;
  height: 30px;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  padding-left: 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
`;
export const Button = styled.button`
  background-color: transparent;
  transition: 0.5s;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gold};
  }
  border: none;
`;
export const MenuContainer = styled.div`
  height: 200px;
  width: 150px;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.black};
  position: absolute;
  top: 50px;
  left: 130px;
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.gold};
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding-bottom: 20px;
`;
export const MenuNavLink = styled(Router.Link)`
  background-color: transparent;
  transition: 0.5s;
  text-decoration: none;

  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-family: ${(props) => props.theme.fonts.extraBold};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.gold};
  }
`;
export const SearchResultsContainer = styled.div`
  position: absolute;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 300px;
  border: solid 2px ${(props) => props.theme.colors.gold};
  left: 370px;
  width: 192px;
  padding: 10px;
  top: 42px;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 1000;
`;
export const MoviesContainer = styled.div`
  width: calc(100vw - 120px);
  height: calc(100vh - 140px);
  display: flex;
  margin: 20px;
  align-items: center;
  padding-left: 60px;
  flex-direction: column;
  gap: 10px;
`;
export const MovieContainer = styled.div`
  padding: 0px;
  margin: 0px;
  height: 75px;
  width: 192px;
`;
export const MovieBodyContainer = styled.div`
  height: 50px;
  width: 192px;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.hoverGold};
  }
`;
export const MovieTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 150px;
  height: 50px;
  font-size: 12px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  padding-left: 5px;
  text-decoration: none;
  justify-content: center;
  margin: 0px;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;
export const NothingTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 70px;
  padding-left: 5px;
  text-decoration: none;
  justify-content: center;
  margin: 0px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
`;
export const DateContainer = styled.div``;
export const MovieImg = styled.img`
  height: 50px;
  border: solid 1px ${(props) => props.theme.colors.darkGray};
  padding: 0px;
  margin: 0px;
  width: auto;
`;
