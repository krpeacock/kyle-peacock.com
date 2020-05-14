import React from "react";
import { TitleSection } from "../../components/BlogComponents";
import { Main } from "../../layouts/layout";

const SiteUpgrade = () => (
  <Main>
    <TitleSection title="Site Upgrade" date="1/19/2019" />
    <p>
      I finally decided to rebuild my site today. I wanted something that was
      low-key and unopinionated, so that I could more easily keep it up to date
      and also showcase bits of design that I've been working on
    </p>
  </Main>
);

export default SiteUpgrade;
