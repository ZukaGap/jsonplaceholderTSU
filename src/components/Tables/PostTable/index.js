import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PostTable() {
  const [URLPost, setURLPost] = useState(window.location.href);
  const dispatch = useDispatch();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = () => {
    const url = new URL(URLPost);
    const ID = url.searchParams.get("id");
  };

  return <div>post table: {URL}</div>;
}
