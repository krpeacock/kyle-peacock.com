import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export const TitleAndDate = styled.div`
  border-bottom: 1px solid #e6e9eb;
  padding-bottom: 0.2em;
  margin-bottom: "1em";
  height: "auto";
`;

export const BlogHeader = styled.h3`
  margin-bottom: 0;
  color: #415161;
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

export const BlogImage = ({ src, children }) => (
  <Column>
    <StyledImage src={src} />
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
