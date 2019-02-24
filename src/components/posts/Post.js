import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const { id, image, imageURL, title, content } = props.post;
  return (
    <div className="post">
      <div className="post__img_wrapper">
        <img src={imageURL} className="post__img" alt={image} />
      </div>
      <div className="post__content">
        <h3>{title}</h3>
        <span className="post__content__details">
          <i className="fas fa-camera-retro" /> Life Styles Tags: people April
          20, 2018{" "}
        </span>
        <p className="post__content__body">
          {content.length > 250 ? content.substring(0, 250) + "..." : content}
        </p>
        <Link to={`/post/${id}`} className="btn btn-primary">
          Continue Reading...
        </Link>
        <i className="fas fa-share share_btn" />
      </div>
    </div>
  );
};

export default Post;
