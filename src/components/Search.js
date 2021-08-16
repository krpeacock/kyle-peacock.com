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
import { Post } from "./LayoutComponents";
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
  align-items: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-direction: column;
  form {
    width: 100%;
    margin-right: auto;
  }
`;

export const Search = () => {
  const [value, setValue] = React.useState("");
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
    setValue(value);
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
                <Button variant="secondary" onPress={close}>
                  Close
                </Button>
                <Form>
                  <SearchField
                    onChange={handleChange}
                    onClear={() => {
                      if (!value) {
                        close();
                      }
                    }}
                    autoFocus
                    label="Search"
                  />
                </Form>
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
