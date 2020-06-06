import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export const TitleAndDate = styled.div`
  border-bottom: 1px solid #e6e9eb;
  padding-bottom: 0.2em;
  margin-bottom: 2em;
  h1,
  h2,
  h3 {
    margin-bottom: 0;
    color: var(--title-color);
    text-decoration: none;
  }
  h1 {
    font-size: 1.5rem;
  }
`;

export const BlogHeader = styled.h3`
  margin-bottom: 0;
  color: var(--title-color);
  text-decoration: none;
  &:hover: {
    color: #6c8095;
  }
`;

export const Date = styled.p`
  font-size: 14px;
  margin-bottom: 0;
`;

export const Description = styled.p`
  text-align: center;
`;

export const StyledImage = styled.img`
  margin: auto;
  margin-bottom: 0;
  max-width: 90vw;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogImage = ({ src, alt, children, style }) => (
  <Column style={style}>
    <StyledImage src={src} alt={alt} />
    <Description>{children}</Description>
  </Column>
);

export const TitleSection = ({ title, date }) => {
  const page =
    "/blog/" +
    title
      .toLowerCase()
      .split(" ")
      .join("-");
  return (
    <TitleAndDate>
      <Link to={page} style={{ textDecoration: "none" }}>
        <BlogHeader>{title}</BlogHeader>
      </Link>
      <Date>{date}</Date>
    </TitleAndDate>
  );
};

export const FlexImages = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 48%;
    }
  }
`;
