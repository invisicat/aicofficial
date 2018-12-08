import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import hex from "../functions/hexGen.js";
const randomColor = hex();
const Page = withRouter(props => (
  <Layout>
    <link href="../CSS/Pages/post.css" rel="stylesheet" />
    <h1>{props.router.query.title}</h1>
    <p>{props.router.query.text}</p>
    <style>{`
      h1 {
        color: ${randomColor};
        text-align: center;
        font-size: 32px;
      }
      p {
        font-size: 16px;
        text-align: center;
        color: white;
      }
      p:hover {
        color: pink;
        transition: 800ms ease all;
      }
      `}</style>
  </Layout>
));

export default Page;
