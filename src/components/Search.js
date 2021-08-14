import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  ActionButton,
  Button,
  Divider,
  Content,
  Form,
  SearchField,
} from "@adobe/react-spectrum";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { Post } from "../pages/blog";
import styled from "styled-components";

const Result = ({ result }) => {
  const post = {
    node: result,
  };
  return <Post post={post} />;
};

const AnimatedSection = styled.section`
  overflow-y: hidden;
  min-height: 80vh;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  input {
    margin-bottom: 1rem;
    padding: 1rem 8px;
  }
`;

export const Search = () => {
  const [search, setSearch] = React.useState("");

  const searchData = useStaticQuery(
    graphql`
      query SearchQuery {
        localSearchPages {
          index
          store
        }
      }
    `
  );

  const index = searchData.localSearchPages.index;
  const store = searchData.localSearchPages.store;

  const searchResults = useFlexSearch(search, index, store).sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  const handleChange = (value) => {
    if (value.length > 2) {
      setSearch(value);
    } else {
      setSearch("");
    }
  };

  return (
    <>
      <DialogTrigger>
        <ActionButton>Search</ActionButton>
        {(close) => (
          <Dialog size="L">
            <Content>
              <SearchDiv>
                <Form width="auto">
                  <SearchField
                    onChange={handleChange}
                    autoFocus
                    label="Search"
                    width="auto"
                  />
                </Form>
                <Button variant="secondary" onPress={close}>
                  Close
                </Button>
              </SearchDiv>
              <Divider />
              <AnimatedSection hasResults={searchResults.length}>
                {searchResults.length
                  ? searchResults.map((result) => (
                      <Result result={result} key={result.id} />
                    ))
                  : null}
              </AnimatedSection>
            </Content>
          </Dialog>
        )}
      </DialogTrigger>
    </>
  );
};
