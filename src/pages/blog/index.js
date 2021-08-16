import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, Link, graphql } from "gatsby";
import {
  TitleAndDate,
  BlogHeader,
  Date as BlogDate,
} from "../../components/BlogComponents";
import banner from "../../images/Peacockbanner.png";
import Layout from "../../layouts/layout";
import { Picture, Posts } from "../../components/LayoutComponents";

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
