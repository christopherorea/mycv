import { Fragment } from "react";

const Card = (props) => {
  const { year, title, description, category, link, src } = props;

  const links = link.map(l => <Fragment><a href={l.src}>{l.text}{" >>"}</a><br /></Fragment>)
  return (
    <div className="home-container6 inteligentia">
      <div className="blog-post-card2-blog-post-card blog-post-card2-root-class-name3">
        {src.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
          <img alt="blog-post" src={src} className="blog-post-card2-image" />
        ) : (
          <iframe width="560" src={src}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        )}
        <div className="blog-post-card2-container">
          <div className="blog-post-card2-container1">
            <span className="blog-post-card2-text">
              <span>{category}</span>
            </span>
            <span className="blog-post-card2-text1">
              <span>{year}</span>
            </span>
          </div>
          <h1 className="blog-post-card2-text2">
            <span>{title}</span>
          </h1>
          <span className="blog-post-card2-text3">
            <span>
              {description}
              <br />
              <br />
              {links}
            </span>
          </span>
        </div>
      </div>
    </div>
  )

};

export default Card;