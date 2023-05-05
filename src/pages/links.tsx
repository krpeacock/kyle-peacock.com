import React from "react";
import Layout from "../layouts/layout";
import { Button, View } from "@adobe/react-spectrum";

interface Props {
  location: URL;
}

function Links(props: Props) {
  const { location } = props;
  return (
    <Layout
      pageContext={{
        disableTitleAndDate: true,
        frontmatter: {
          title: "Kyle Peacock",
        },
      }}
      location={location}
    >
      <h1>It's me, Kyle</h1>
      <img
        src="/images/profile.jpeg"
        alt="artistic profile"
        style={{ maxWidth: "400px" }}
      />
      <View>
        <a href={`/kyle-peacock.vcf`} download="kyle-peacock.vcf">
          Download My Contact
        </a>
      </View>

      <p>Here's some links to my stuff:</p>
      <ul>
        <li>
          <a href="/blog">My Blog</a>
        </li>
        <li>
          <a href="https://github.com/krpeacock">My Github</a>
        </li>
        <li>
          <a href="https://twitter.com/kylpeacock">My Twitter</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/krpeacock">My LinkedIn</a>
        </li>
        <li>
          <a href="https://discord.com/users/Kyle#8394">Discord</a>
        </li>
      </ul>
    </Layout>
  );
}

export default Links;
