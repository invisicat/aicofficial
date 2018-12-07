import Layout from "../components/dashboardLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";
import myForm from "../components/manageDashForm.js";

const Page = withRouter(props => (
  function xd() {
    console.log('d')
  }
  <Layout>
    <h1>Manage</h1>
    <p>You can manage your bot here.</p>
    <form>
      <select name="carlist" onChange={xd()}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </form>
    <style>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');

			h1 {
        margin: 80px auto 40px auto;
				text-align: center;
        font-family: Montserrat;
			}
      p {
        text-align: center;
      }
			p:hover {
				color: red;
			}
			`}</style>
  </Layout>
));

export default Page;
