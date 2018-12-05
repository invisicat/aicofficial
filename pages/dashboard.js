import Layout from "../components/dashboardLayout.js";
import Link from "next/link";
import { withRouter } from "next/router";
import MathArray from "../functions/MathArray.js";
import Hex from "../functions/hexGen.js";
const names = ["allah", "kwe", "fhuf", "f"];
const Page = withRouter(props => (
  <Layout>
    <h1>Welcome, {props.router.query.json.username}</h1>
    <span id="management" class="main-Menu-Buttons">
      Server Management
    </span>
    <span id="log" class="main-Menu-Buttons">
      Mod Log
    </span>
    <span id="selectserver" href="#info" class="main-Menu-Buttons">
      Your Info
    </span>
    <p id="titledesc">Here are Thonking's Bot Commands and Settings.</p>
    <h1>Settings</h1>
    <p id="settingsdesc">You can change your bot's settings here.</p>
    <h1>{props.router.query.json.username}'s Information</h1>
    <h6>Last updated on: {props.router.query.json.fetchedAt}</h6>
    <p class="infoSettings">
      <b>Name</b>: {props.router.query.json.username}
    </p>
    <p class="infoSettings">
      <b>Verified</b>: {props.router.query.json.verifed}
    </p>
    <p class="infoSettings">
      <b>MFA Enabled</b>: {props.router.query.json.mfa}
    </p>
    <p class="infoSettings">
      <b>User ID</b>: {props.router.query.json.id}
    </p>
    <p class="infoSettings">
      <b>Avatar (Base64)</b>:{" "}
      <Link
        href={`https://cdn.discordapp.com/avatars/${
          props.router.query.json.id
        }/${props.router.query.json.avatar}.png`}
      >
        <a>Here</a>
      </Link>
    </p>
    <p class="infoSettings">
      <b>Email</b>: {props.router.query.json.email}
    </p>
    <p class="infoSettings">
      <b>Username</b>: {props.router.query.json.username}#
      {props.router.query.json.discriminator}
    </p>
    <p class="infoSettings">
      <b>Provider</b>: {props.router.query.json.provider}
    </p>
    <h2>Guilds</h2>
    <p id="settingsguildsdesc">
      Here are your guilds that you've joined. (Listing only 5 because of
      limitations)
    </p>
    <table align="center">
      <tr>
        <th>Server Name</th>
        <th>Server Icon</th>
        <th>Server ID</th>
        <th>Owner?</th>
        <th>Permission #</th>
      </tr>
      <tr>
        <th>{props.router.query.json.guilds[1].name}</th>
        <th>
          <img
            class="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${
              props.router.query.json.guilds[1].id
            }/${props.router.query.json.guilds[1].icon}.png?size=64`}
          />
        </th>
        <th>{props.router.query.json.guilds[1].id}</th>
        <th>{props.router.query.json.guilds[1].owner}</th>
        <th>{props.router.query.json.guilds[1].permissions}</th>
      </tr>
      <tr>
        <th>{props.router.query.json.guilds[2].name}</th>
        <th>
          <img
            class="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${
              props.router.query.json.guilds[2].id
            }/${props.router.query.json.guilds[2].icon}.png?size=64`}
          />
        </th>
        <th>{props.router.query.json.guilds[2].id}</th>
        <th>{props.router.query.json.guilds[2].owner}</th>
        <th>{props.router.query.json.guilds[2].permissions}</th>
      </tr>
      <tr>
        <th>{props.router.query.json.guilds[3].name}</th>
        <th>
          <img
            class="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${
              props.router.query.json.guilds[3].id
            }/${props.router.query.json.guilds[3].icon}.png?size=64`}
          />
        </th>
        <th>{props.router.query.json.guilds[3].id}</th>
        <th>{props.router.query.json.guilds[3].owner}</th>
        <th>{props.router.query.json.guilds[3].permissions}</th>
      </tr>
      <tr>
        <th>{props.router.query.json.guilds[4].name}</th>
        <th>
          <img
            class="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${
              props.router.query.json.guilds[4].id
            }/${props.router.query.json.guilds[4].icon}.png?size=64`}
          />
        </th>
        <th>{props.router.query.json.guilds[4].id}</th>
        <th>{props.router.query.json.guilds[4].owner}</th>
        <th>{props.router.query.json.guilds[4].permissions}</th>
      </tr>
      <tr>
        <th>{props.router.query.json.guilds[5].name}</th>
        <th>
          <img
            class="settingsguildimg"
            src={`https://cdn.discordapp.com/icons/${
              props.router.query.json.guilds[5].id
            }/${props.router.query.json.guilds[5].icon}.png?size=64`}
          />
        </th>
        <th>{props.router.query.json.guilds[5].id}</th>
        <th>{props.router.query.json.guilds[5].owner}</th>
        <th>{props.router.query.json.guilds[5].permissions}</th>
      </tr>
    </table>
    <style>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');

        .settingsguildimg {
          width: 12;
          height: 12;
        }
        table, th, td {
          border: 1px solid black;
          text-align: center;
          padding: 20px;
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
        font-family: Montserrat;
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
