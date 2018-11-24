import cowsay from "cowsay-browser";
import fetch from "isomorphic-unfetch";
import { withRouter } from "next/router";
import Header from "../components/Header.js";
import Layout from "../components/MyLayout.js";
// export default () => <pre>{cowsay.say({ text: "hi there!" })}</pre>;

const Page = withRouter(props => (
  <Layout>
    <pre>{cowsay.say({ text: props.router.query.msg })}</pre>
  </Layout>
));
export default Page;
