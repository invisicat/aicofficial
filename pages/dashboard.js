import Layout from "../components/dashboardLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";

const Page = withRouter(props => (
  <Layout>
    <h1>Welcome, {props.router.query.json.username}</h1>
    <span id="management" class="main-Menu-Buttons">
      Server Management
    </span>
    <span id="log" class="main-Menu-Buttons">
      Mod Log
    </span>
    <span id="selectserver" class="main-Menu-Buttons">
      Select Server
    </span>
    <p id="titledesc">Here are Thonking's Bot Commands and Settings.</p>
    <h1>Settings</h1>
    <p id="settingsdesc">You can change your bot's settings here.</p>
    <style>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');
      * {
        font-family: Montserrat;
      }
			h1 {
        margin-top: 90px;
        text-align: center;
				color: black;
			}
			#titledesc {
        margin-top: 60px;
				text-align: center;
			}
      #settingsdesc {
        margin-top: 30px;
				text-align: center;
			}
      .main-Menu-Buttons {
        padding: 20px;
        margin: 200px;

      }

      #management {
        background: #2ecc71;
        margin: auto auto auto 550px;
        transition: 800ms ease all;
      }
      #log {
        background: #e67e22;
        margin: auto 10px auto 10px;
        transition: 1s ease all;
      }

      #selectserver {
        background: #1abc9c;
        margin: auto 10px auto 10px;
        transition: 800ms ease all;
      }

      #management:hover {
        border: 0.5px solid black;
        cursor: pointer;
        background:  white;
      }

      #selectserver:hover {
        border: 0.5px solid black;
        cursor: pointer;
        background:  white;
      }

      #log:hover {
        border: 1px solid black;
        cursor: pointer;
        background: white;
      }
			`}</style>
  </Layout>
));

export default Page;
