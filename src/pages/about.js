import React from "react";
import { Link } from "gatsby";

import Layout from "../layouts/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import NotCoinbase from "../components/NotCoinbase";

const Container = styled.section`
  padding: 1rem;
`;

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="about" />
    <Container>
      <h1>About me</h1>
      <p>
        I'm a software engineer, working for the{" "}
        <a href="https://dfinity.org">DFINITY Foundation</a>, building developer tools for the Internet Computer Protocol. I identify as
        genderqueer and use they/them pronouns, and am married to an awesome
        partner {"🥰"} who works for the city of SF.
      </p>
      <p>
        In my spare time, I enjoy exploring Golden Gate Park, and I've volunteered
        as an educator for{" "}
        <a href="https://www.codetenderloin.org/">Code Tenderloin</a>. I've
        contributed to civic projects at{" "}
        <a href="https://codeforsanfrancisco.org/">Code for San Francisco</a>,
        where I've built{" "}
        <a href="https://tenantprotections.org">
          https://tenantprotections.org
        </a>{" "}
        in collaboration with the Tech Equity Collaborative, in order to help
        tenants understand how California's latest laws affect tenants. I also
        worked on a bike lane violation app at&nbsp;
        <a href="https://app.lanebreach.org">app.lanebreach.org</a> and some
        small efforts for the{" "}
        <a href="https://muni.opentransit.city/">Open Transit</a> project.
      </p>
      <p>
        I grew up in Walnut Creek and went to college in Illinois where I
        studied Political Science and Philosophy. My partner and I met in Oxford
        while studying abroad, and we moved back to the bay area in 2015.
      </p>
      <p>
        After spending a semester studying Law at UC Davis, I dropped out to
        spend six months learning to code at{" "}
        <a href="https://www.galvanize.com/">Galvanize</a>, a programming
        bootcamp.
      </p>
      <p>
        Since then, I worked at two marketing agencies,{" "}
        <a href="https://www.organic.com/home">Organic</a> and{" "}
        <a href="https://www.akqa.com/">AKQA</a>, where I built pages for{" "}
        <a href="https://welcome.wf.com/get-college-ready-tracker">
          Wells Fargo
        </a>{" "}
        and <a href="https://www.audiusa.com/myaudi">Audi USA</a>, where I
        re-skinned the My Audi experience. I spent a brief contract at{" "}
        <a href="https://www.splunk.com/">Splunk</a> before moving on to{" "}
        <a href="https://www.cuyana.com">Cuyana</a>.
      </p>
      <p>
        Most recently, I spent 2020 working at <NotCoinbase /> building internal
        tools and working on accessibillity updates to their website.
      </p>
      <br />
      <a href="https://docs.google.com/document/d/17bodJJkgD76tYKhIOg-cEJlXrRGoOWpcKzUobClP5y8/edit?usp=sharing">
        My Resume
      </a>
      <br />
      <a rel="me" href="https://social.coop/@kyle">
        Mastodon
      </a>
      <br />
      <h2>So, what's my deal?</h2>
      <p>
        To me, coding is a trade skill, and less of an identity. There are
        plenty of fun and interesting puzzles to solve in applying technology,
        but that's always been less interesting to me than questions about how
        we relate to each other and what leads to human flourishing.
      </p>
      <p>
        To that end, I've found that I keep coming back to a few things so far,
        as I'm building my career. The web is a fantastic tool for telling
        stories and connecting people, and it was well-designed to be accessible
        to people by default. As applications get more complicated, though, we
        tend to overlook and accidentally exclude people who access the web
        differently from how we do. That's led me to listen and learn from
        experts on how to build things to always be accessible by default, and
        to keep listening as better approaches are introduced.
      </p>
      <p>
        I've also found that art and storytelling are intrinsically motivating
        to me. Equipping someone with the ability to bring their photography or
        copywriting to be shared with the world is always exciting. Music, art,
        and sharing information are all at the core of what I think can make the
        internet a beautiful place, and I was raised to be a guest who always
        tries to leave a place nicer than how I found it.
      </p>
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default AboutPage;
