import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { BlogHeader, BlogDate, TitleAndDate } from "./BlogComponents";
import defaultImage from "../images/Peacockbanner.png";

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  max-height: 35vh;
  background-color: #04141b;
  width: 100%;
  img {
    max-height: 35vh;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  picture {
    margin-bottom: auto;
    max-height: 8rem;
    display: flex;
    width: 6rem;
    @media (min-width: 767px) {
      width: 10rem;
    }
    img {
      max-width: 100%;
      object-fit: fill;
    }
  }
  h3 {
    margin-top: 0;
  }
`;

export const Post = ({ post }) => {
  const frontmatter = post.node.frontmatter;
  const { title, description, date, path, series, tags, featuredImage } =
    frontmatter;
  const dt = new Date(date).toDateString().split(" ");
  const image = featuredImage ? featuredImage : defaultImage;
  return (
    <Article key={post?.node?.id}>
      <picture>
        <img src={image} alt="" />
      </picture>
      <TitleAndDate>
        <Link
          to={`/blog/${path}`}
          style={{ textDecoration: "none", filter: "none" }}
        >
          <BlogHeader style={{ color: "inherit" }}>{title}</BlogHeader>
        </Link>
        <BlogDate>{`${dt[1]} ${dt[2]}, ${dt[3]}`}</BlogDate>
        <p>{description}</p>
      </TitleAndDate>
    </Article>
  );
};

export const Posts = ({ edges }) => {
  if (!edges) return null;
  const posts = edges.map((post) => {
    return <Post post={post} />;
  });

  return <>{posts}</>;
};
