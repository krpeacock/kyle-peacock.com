import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
                isPrivate
                featuredImage
              }
            }
          }
        }
      }
    `
  );
  return (
    <>
      <SEO
        title="Blog"
        description="Technical and non-technical posts from Kyle's blog. This blog is a bit of a digital garden. "
        {...frontmatter}
      />
      <Picture>
        <img src={banner} alt="image with a Peacock logo" />
      </Picture>
      <Layout>
        <Posts
          edges={data?.allMdx?.edges.filter(
            (edge) => !edge.node.frontmatter.isPrivate
          )}
        />
      </Layout>
    </>
  );
};

export default Blog;
