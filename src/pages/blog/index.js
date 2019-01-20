import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components'
import PowerStrip from "./power-strip";
import SiteUpgrade from "./site-upgrade"

const Banner = styled.div`
  width: 100vw,
  height: 20em,
  background-image: url("/static/blog_banner.jpg")
`;

const Blog = () => (
  <div>
    <Banner />
    <SiteUpgrade/>
    <PowerStrip />
  </div>
);

export default Blog;
