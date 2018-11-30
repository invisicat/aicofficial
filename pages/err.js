import Layout from "../components/ErrorLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";

const Page = withRouter(props => (
  <Layout>
    <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" />
    <h1 id="lul">Error</h1>
    <h1 align="center" id="oof">
      <i class="fas fa-exclamation-circle" />
    </h1>
    <p>Possible Error. Please return to the homepage!</p>
    <i class="fas fa-exclamation-circle" />
    <p>
      Please report here:
      <Link href="https://github.com/andyiscool5463/aicofficial/issues">
        <a>Github</a>
      </Link>
    </p>
    <style>{`
			#lul {
				color: grey;
        text-align: center;
        font-size: 80px;
			}
      #oof {
        color: white;
        font-size: 50px;
        transition: 800ms ease all;
      }
      #oof:hover {
        color: black;
      }
      p {
        text-align: center;
        font-size: 20px;
      }
			p:hover {
				color: red;
			}
			`}</style>
  </Layout>
));

export default Page;
