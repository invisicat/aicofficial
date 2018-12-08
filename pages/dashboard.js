import Layout from "../components/dashboardLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";
import Userinfo from "../components/DashboardComponents/userinfoComp.js";
import ArrayMan from "../components/DashboardComponents/serverArrayManager.js";
import TimeGreeter from "../functions/Dashboard/TimeGreeter.js";
const manual = {
  marginBottom: 40
};
function add(a, b) {
  return a + b;
}
const Page = withRouter(props => (
  <Layout>
    <TimeGreeter />
    <h5
      align="center"
      style={manual}
      title={`${
        props.router.query.user.guildsInside.length
      } servers with ${props.router.query.user.channels.reduce((a, b) => {
        return a + b, 0;
      })} channels.`}
    >
      You currently own <b>{props.router.query.user.guildsInside.length}(s)</b>{" "}
      servers with the bot hosted on it.
    </h5>
    <a href="/udb/manage" className="menubuttons">
      <span id="management" className="main-Menu-Buttons">
        Server Management
      </span>
    </a>
    <a href="/log" className="menubuttons">
      <span id="log" className="main-Menu-Buttons">
        Mod Log
      </span>
    </a>
    <a href="#info" className="menubuttons">
      <span id="selectserver" href="#info" className="main-Menu-Buttons">
        Your Info
      </span>
    </a>
    <p id="titledesc">Here are Thonking's Bot Commands and Settings.</p>
    <h1>Settings</h1>
    <p id="settingsdesc">You can change your bot's settings here.</p>
    <Userinfo />
    <h2>Guilds</h2>
    <p id="settingsguildsdesc">Here are your guilds that you've joined.</p>
    <table align="center">
      <tr>
        <th>Server Name</th>
        <th>Server Icon</th>
        <th>Server ID</th>
        <th>Owner?</th>
        <th>Permission #</th>
      </tr>
      <ArrayMan array={props.router.query.json.guilds} />
    </table>

    <style>{`

      @import url('https://fonts.googleapis.com/css?family=Montserrat');
      .avatar {
        border-radius: 50%;
      }
        .settingsguildimg {
          width: 12;
          height: 12;
        }
        table, th, td {
          border: 1px solid black;
          text-align: center;
          padding: 20px;
      }
      .menubuttons {
        color: black;
        text-decoration: none;
      }
      tr {
        margin: 20px;
      }
      td {
        margin: 200px;
      }
      h6 {
        text-align: center;
      }
      * {
        font-family: Montserrat, sans-serif;
      }
      .infoSettings {
        text-align: center;
      }
			h1 {
        margin-top: 90px;
        text-align: center;
				color: black;
			}
      h2 {
        text-align: center;
      }
      #settingsguildsdesc {
        text-align: center;
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
        padding: 20px 20px 20px 20px;
        margin: 200px;

      }

      #management {
        background: #2ecc71;
        margin: auto auto auto 550px;
        transition: 600ms ease all;
      }
      #log {
        background: #e67e22;
        margin: auto 10px auto 10px;
        transition: 600ms ease all;
      }

      #selectserver {
        background: #1abc9c;
        margin: auto 10px auto 10px;
        transition: 600ms ease all;
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
      footer {
        text-align: right;
      }


      ::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
			`}</style>
    <footer>Made with love ❤</footer>
  </Layout>
));

export default Page;
