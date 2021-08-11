import * as React from "react";
import Layout from "../layouts/layout";
import { page_visits } from "../declarations/page_visits";
import {
  Result_1,
  VisitSummary,
} from "../declarations/page_visits/page_visits.did";

const Summary = (props: { summary: VisitSummary }) => {
  const { summary } = props;
  return (
    <article key={summary.route}>
      <h3>{summary.route}</h3>
      <dl>
        <dt>Total visits:</dt>
        <dd>{summary.total}</dd>
        <dt>Mobile:</dt>
        <dd>{summary.mobile}</dd>
        <dt>Desktop:</dt>
        <dd>{summary.desktop}</dd>
      </dl>
    </article>
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
  return summaries;
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
      <section>
        {summaries
          ? summaries.map((summary) => <Summary summary={summary} />)
          : null}
      </section>
    </Layout>
  );
}

export default Visits;
