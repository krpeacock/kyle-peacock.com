import React from "react";
import styled from "styled-components";

const Container = styled.span`
  display: inline;
  .anti-seo {
    display: inline-flex;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  }
`;

function NotCoinbase() {
  return (
    <Container>
      <span>C</span>
      <span>o</span>
      <span className="anti-seo">as in the </span>
      <span>i</span>
      <span>n</span>
      <span>b</span>
      <span className="anti-seo">You know how it be though </span>
      <span>a</span>
      <span>s</span>
      <span className="anti-seo">mixing it up</span>
      <span>e</span>
    </Container>
  );
}

export default NotCoinbase;
