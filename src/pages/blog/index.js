import React from "react";
import styled from "styled-components";
import { useStaticQuery, Link, graphql } from "gatsby";
import {
  TitleAndDate,
  BlogHeader,
  Date as BlogDate,
} from "../../components/BlogComponents";
import banner from "../../images/Peacockbanner.png";
import Layout from "../../layouts/layout";

const Picture = styled.picture`
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

const Posts = ({ edges }) => {
  if (!edges) return null;
  const posts = edges.map((post) => {
    return <Post post={post} />;
  });

  return <>{posts}</>;
};

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query PostsQuery {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                date
                path
                series
                tags
              }
            }
          }
        }
      }
    `
  );
  return (
    <>
      <Picture>
        <img src={banner} alt="image with a Peacock logo" />
      </Picture>
      <Layout>
        <Posts edges={data?.allMdx?.edges} />
      </Layout>
    </>
  );
};

export default Blog;
