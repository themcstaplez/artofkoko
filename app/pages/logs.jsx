import Page from "../layouts/page";
import fetch from "isomorphic-unfetch";
import LogTable from "../components/LogTable";
import LogAnalyzer from "../components/LogAnalyzer";

const Logs = props => (
  <Page>
    <h1>Logs</h1>
    <LogTable logs={props.logs} />
    <LogAnalyzer logs={props.logs} />
  </Page>
);

Logs.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/logs/full/json");
  const json = await res.json();
  return { logs: json };
};

export default Logs;
