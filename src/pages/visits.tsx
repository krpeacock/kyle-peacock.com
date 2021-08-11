import * as React from "react";
import PieChart from "../components/PieChart";
import Layout from "../layouts/layout";
import { page_visits } from "../declarations/page_visits";
import {
  Result_1,
  VisitSummary,
} from "../declarations/page_visits/page_visits.did";
import styled from "styled-components";
import { PropsWithDefaults } from "react-minimal-pie-chart/types/Chart/Chart";
import { LabelRenderProps } from "react-minimal-pie-chart/types/Label";

const Article = styled.article`
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid var(--text-color);
  padding: 8px;
  @media (min-width: 1080px) {
    max-width: 32%;
  }
  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    dt {
      margin-right: 8px;
    }
  }
  h4 {
    margin: 1rem 0 0.5rem;
    height: 3rem;
    font-size: 1rem;
  }
  .pie {
    max-width: 30vw;
    max-height: 30vh;
  }

  display: grid;
  grid-template-rows: auto auto 1fr;
`;

const Label = (props: LabelRenderProps) => {
  return <p>{props.dataEntry}</p>;
};

const Summary = (props: { summary: VisitSummary }) => {
  const { summary } = props;
  return (
    <Article>
      <h4>
        <a href={summary.route}>{summary.route}</a>
      </h4>
      <dl>
        <dt>Total visits:</dt>
        <dd>{summary.total}</dd>
        <dt>Mobile visits:</dt>
        <dd>{summary.mobile}</dd>
        <dt>Desktop visits:</dt>
        <dd>{summary.desktop}</dd>
      </dl>
      <PieChart
        data={[
          {
            title: "Mobile",
            value: summary.mobile,
            color: "var(--peacock-green)",
          },
          {
            title: "Desktop",
            value: summary.desktop,
            color: "var(--red-violet)",
          },
        ]}
      />
    </Article>
  );
};

async function fetchSummaries(): Promise<VisitSummary[]> {
  const keys = await page_visits?.getKeys();
  const summaries = [];
  for (const route of keys) {
    const summary: Result_1 = await page_visits?.getSummary(route);
    if ("ok" in summary) {
      summaries.push(summary.ok);
    }
  }
  if (window.location.host.indexOf("localhost") >= 0) {
    return summaries;
  }
  return summaries.filter((summary) =>
    window.location.host.includes(summary.route)
  );
}

function Visits() {
  const [summaries, setSummaries] = React.useState<VisitSummary[]>(null);
  React.useEffect(() => {
    fetchSummaries().then((summaries) => {
      setSummaries(summaries);
    });
  }, [setSummaries]);

  return (
    <Layout pageContext={null} location={null} data={null}>
      <h1>Page Visits</h1>
      <section
        style={{
          display: "flex",
          flexFlow: "row wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {summaries
          ? summaries.map((summary) => (
              <Summary summary={summary} key={summary.route} />
            ))
          : null}
      </section>
    </Layout>
  );
}

export default Visits;
