import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImg from "gatsby-image";
import styled from "styled-components";

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  max-height: ${({ maxHeight }) => maxHeight}px;
  @media (min-width: 767px) {
    padding: 0 2em;
  }
  figcaption {
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

type SourcesProps = {
  srcSet: string;
};

type Props = {
  relativePath: string;
  alt: string;
  children?: React.ReactChildren;
  portrait?: boolean;
};

export const Image = (props: Props) => {
  console.clear();
  console.log("image rendered");
  const { relativePath, alt, children, portrait = false } = props;
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "Images" } }) {
        images: nodes {
          relativePath
          childImageSharp {
            fluid(cropFocus: CENTER, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `);

  const foundFile = data.allFile.images.find((image) => {
    return image.relativePath === relativePath;
  });
  const dialogRef = useRef();

  if (!foundFile) return null;
  const srcSet: string = foundFile.childImageSharp.fluid.srcSet;

  useEffect(() => {
    if (dialogRef.current) {
      // dialogPolyfill.registerDialog(dialogRef.current);
    }
  }, [dialogRef]);

  return (
    <StyledFigure
      maxHeight={foundFile.childImageSharp.fluid.presentationHeight}
    >
      <GatsbyImg fluid={foundFile.childImageSharp.fluid} />
      {/* 
      TODO: full size image dialog
      <button
        onClick={() => {
          let foo = dialogRef;
          dialogRef.current?.showModal();
        }}
      >
        open
      </button>
      <dialog ref={dialogRef}>
        <img src={foundFile.childImageSharp.fluid.src} alt={alt} />
      </dialog> */}
      <figcaption>{children}</figcaption>
    </StyledFigure>
  );
};
