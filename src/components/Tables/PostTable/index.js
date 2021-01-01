import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { takePost, takeComments } from "../../../redux/actions/postAction";
import CommentCard from "../../UI/CommentCard/index";
import Header from "../../Forms/Header/index";
import "./index.css";

export default function PostTable() {
  const [URLPost, setURLPost] = useState(window.location.href);
  const dispatch = useDispatch();
  const { body, title, id, userId } = useSelector(
    (item) => item.search.currentPost
  );

  const { currentPostComments } = useSelector((item) => item.search);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    const url = new URL(URLPost);
    const ID = url.searchParams.get("id");
    dispatch(takePost(ID));
    dispatch(takeComments(ID));
  };

  return (
    <div>
      <Header search={false} />
      <div className="post">
        <div className="card-info">
          <span className="info">User ID: {userId}</span>
          <span className="info">Post ID: {id}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{body}</p>
      </div>
      <div className="comments">
        {currentPostComments.length ? (
          currentPostComments.map((data) => (
            <CommentCard
              key={data.id}
              body={data.body}
              email={data.email}
              id={data.id}
              name={data.name}
              postID={data.postId}
            />
          ))
        ) : (
          <p>Comments Empty...</p>
        )}
      </div>
    </div>
  );
}
