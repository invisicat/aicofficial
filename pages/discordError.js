import Layout from "../components/MyLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";

const Page = withRouter(props => (
  <Layout>
    <h1>Discord Error, Please sign in again.</h1>
    <style>{` 
			h1 { 
				color: orange; 
			} 
			p:hover { 
				color: red; 
			} 
			`}</style>
  </Layout>
));

export default Page;
