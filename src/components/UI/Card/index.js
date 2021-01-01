import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Card({ postID, userID, title, body }) {
  return (
    <div className="card">
      <div className="card-info">
        <span className="info">User ID: {userID}</span>
        <span className="info">Post ID: {postID}</span>
      </div>
      <NavLink className="link" to={`/posts?id=${postID}`}>
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{body}</p>
      </NavLink>
    </div>
  );
}
