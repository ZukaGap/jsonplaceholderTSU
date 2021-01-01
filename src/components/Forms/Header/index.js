import React, { useState, useEffect } from "react";
import "./index.css";
import { ReactComponent as ReactLogo } from "../../../assets/medium.svg";
import { useDispatch } from "react-redux";
import { searchData, searchClear } from "../../../redux/actions/postAction";

export default function Header() {
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
      <input
        className="search"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
    </div>
  );
}
