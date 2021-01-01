import React from "react";
import "./index.css";

export default function CommentCard({ body, email, id, name, postID }) {
  return (
    <div className="comment">
      <p className="email">Email: {email}</p>
      <div>
        <h5 className="title">Title: {name}</h5>
        <p className="body">Description: {body}</p>
      </div>
    </div>
  );
}
