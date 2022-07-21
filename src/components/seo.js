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
        const metaDescription =
          description ||
          data.site.siteMetadata.description ||
          "For all your Kyle Peacock related needs. Multi-talented and empathetic, Kyle is a world-class software engineer, who is currently working on the Internet Computer. Check out their blog for more information!";
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: "kylpeacock",
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `og:image`,
                content: `https://kyle-peacock.com${image}`,
              },
              {
                name: `og:image:alt`,
                content: `kyle-peacock.com banner`,
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
