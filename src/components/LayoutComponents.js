import * as React from "react";
import styled from "styled-components";

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

export const Post = ({ post }) => {
  const frontmatter = post.node.frontmatter;
  const { title, description, date, path, series, tags } = frontmatter;
  const dt = new Date(date).toDateString().split(" ");
  return (
    <article key={post?.node?.id}>
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
    </article>
  );
};

export const Posts = ({ edges }) => {
  if (!edges) return null;
  const posts = edges.map((post) => {
    return <Post post={post} />;
  });

  return <>{posts}</>;
};
