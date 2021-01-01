import React, { useEffect } from "react";
import "./index.css";
import Header from "../../Forms/Header/index";
import Card from "../../UI/Card/index";
import { useSelector, useDispatch } from "react-redux";
import { loadPageData } from "../../../redux/actions/postAction";

export default function HomeTable(props) {
  const dispatch = useDispatch();
  const { data, searchData, error, searchString } = useSelector(
    (item) => item.search
  );

  useEffect(() => {
    dispatch(loadPageData());
  }, []);

  useEffect(() => {
    document.title = props.title || "Home";
  }, [props.title]);

  return (
    <div>
      <Header search />
      <div className="cards">
        {error === "Not Found" ? <p>not found: "{searchString}"</p> : ""}
        {searchData.length
          ? searchData.map((res) => (
              <Card
                key={res.id}
                postID={res.id}
                userID={res.userId}
                title={res.title}
                body={res.body}
              />
            ))
          : !!data
          ? data.map((res) => (
              <Card
                key={res.id}
                postID={res.id}
                userID={res.userId}
                title={res.title}
                body={res.body}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
