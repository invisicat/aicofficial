import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
  </Layout>
);
export default Post;
