import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import defaultImage from "../images/Peacockbanner.png";

function SEO(props) {
  const { description, lang, meta, tags, title, featuredImage } = props;
  const image = featuredImage ? featuredImage : defaultImage;
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        console.log(props);
        const metaDescription =
          description ||
          data.site.siteMetadata.description ||
          "For all your Kai Peacock related needs. Multi-talented and empathetic, Kai is a world-class software engineer, who is currently working on the Internet Computer. Check out their blog for more information!";
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={
              props.canonical
                ? [
                    {
                      rel: "canonical",
                      href: props.canonical,
                    },
                  ]
                : null
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `og:image`,
                content: `https://kaipeacock.com${image}`,
              },
              {
                name: `og:image:alt`,
                content: `kaipeacock.com banner`,
              },
            ]
              .concat(
                tags?.length > 0
                  ? {
                      name: `keywords`,
                      content: tags?.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
