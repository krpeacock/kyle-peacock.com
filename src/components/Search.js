import * as React from 'react';
import { Dialog, DialogTrigger, ActionButton } from "@adobe/react-spectrum";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from 'react-use-flexsearch'

export const Search = () => {
    const searchData = useStaticQuery(
        graphql`
          query SearchQuery {
            localSearchPages {
              index
              store
            }
          }
        `);

    const index = searchData.localSearchPages.index;
    const store = searchData.localSearchPages.store;

    const results = useFlexSearch("Dfinity", index, store);
    console.log(results);
    return <>
        <DialogTrigger>
            <ActionButton>Search</ActionButton>
            <Dialog>
                asdf
            </Dialog>
        </DialogTrigger>
    </>
}