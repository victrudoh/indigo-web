import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

// Styles
import {
  Wrapper,
  Content,
  Top,
  TopLeft,
  TopLeftImg,
  TopLeftText,
  TopRight,
  List,
  ListItem,
  Bottom,
} from "./Leaderboard.Styles";

// Images
import bg from "../../assets/images/leaderboard/bg.webp";
import DP from "../../assets/images/leaderboard/itachi.jpg";

// Components
import SearchBar from "../searchBar/SearchBar";
import { Spinner } from "../spinner/Spinner.Styles";

const Leaderboard = () => {
  const [user, setUser] = useState({});
  const [Board, setBoard] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  // get user profile to populate top of leaderboard
  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/users/profile",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = response.data.user;

      setUser(user);
      return user;
    } catch (err) {
      // swal({
      //   title: "Oops!",
      //   text: err.response.data.error,
      //   icon: "error",
      //   buttons: false,
      //   timer: 3000,
      //   closeOnClickOutside: false,
      //   dangerMode: true,
      // });
      // setLoading(false);
      return err;
    }
  };

  const getLeaderBoard = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/users/leaderboard",
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const board = response.data.leaderboard;
      setBoard(board);
      setFiltered(board);
      setLoading(false);
    } catch (err) {
      swal({
        title: "Oops!",
        text: err.response.data.error,
        icon: "error",
        buttons: false,
        timer: 3000,
        closeOnClickOutside: false,
        dangerMode: true,
      });
      setLoading(false);
    }
  };

  // SearchBar Handler
  const onSearchCangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredBoard = Board.filter((item) =>
        item.username.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredBoard);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getLeaderBoard();
    getProfile();
  }, []);

  return (
    <>
      <Wrapper bg={bg}>
        <div className="searchBar">
          <SearchBar label={"username"} search={onSearchCangeHandler} />
        </div>
        <Content>
          <Top>
            {localStorage.getItem("token") ? (
              <>
                <TopLeft>
                  <img src={user.user_img ? user.user.img : DP} alt="media" />
                  <TopLeftText>
                    <h4>{user.username}</h4>
                    <h5>{user.rank}</h5>
                  </TopLeftText>
                </TopLeft>
                <TopRight>
                  <h4></h4>
                  <h5>{user.position}</h5>
                </TopRight>
              </>
            ) : (
              <h4 className="mx-5">Leaderboard</h4>
            )}
          </Top>
          <List>
            {loading ? (
              <Spinner />
            ) : (
              filtered.map((item, i) => (
                <table className="table" key={i}>
                  <tbody>
                    <tr>
                      <td>{item.position}</td>
                      <td>{item.username}</td>
                      <td>{item.rank}</td>
                      <td className="disappear">{item.country}</td>
                      <td className="disappear">{item.city}</td>
                      <td>{item.experience}</td>
                    </tr>
                  </tbody>
                </table>
              ))
            )}
          </List>
          <Bottom>
            <a href="/">
              <span className="bx bx-left-arrow"></span>
              <h6>Back</h6>
            </a>
          </Bottom>
          {/* <div className="searchBarDown">
            <SearchBar label={"username"} search={onSearchCangeHandler} />
          </div> */}
        </Content>
      </Wrapper>
    </>
  );
};

export default Leaderboard;
