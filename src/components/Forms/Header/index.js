import React, { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as ReactLogo } from "../../../assets/medium.svg";
import { useDispatch } from "react-redux";
import { searchData, searchClear } from "../../../redux/actions/postAction";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText.length > 0) {
      dispatch(searchData(searchText));
    } else if (searchText.length === 0) {
      dispatch(searchClear());
    }
  }, [searchText]);

  return (
    <div className="header">
      <NavLink to={`/`}>
        <ReactLogo
          style={{
            backgroundColor: "yellow",
            padding: "0 10",
            width: 200,
            height: 80,
            position: "inherit",
            left: 0,
          }}
        />
      </NavLink>
      {props.search ? (
        <input
          className="search"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
      ) : (
        ""
      )}
    </div>
  );
}
