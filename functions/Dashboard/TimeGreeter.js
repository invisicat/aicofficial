import Layout from "../../components/MyLayout.js";
import MathArray from "../../functions/MathArray.js";
import { withRouter } from "next/router";
import Link from "next/link";
import moment from "moment-timezone";
// Custom Version of the time Greeter specfically made for the Dashbaord, maynot work for other pages.
var today = new Date();
var now = today.getHours();
var message;

if (now < 12) {
  message = "Good Morning";
} else if (now < 18) {
  message = "Good Afternoon";
} else {
  message = "Good Evening";
}
var xd = today.toLocaleTimeString();
var day = today.toLocaleDateString();
var timezone = today.getTimezoneOffset();
const Page = withRouter(props => (
  <div>
    <h1>
      {message}, {props.router.query.json.username}.
      <span>
        <img
          className="avatar"
          align="center"
          src={`https://cdn.discordapp.com/avatars/${
            props.router.query.json.id
          }/${props.router.query.json.avatar}.png?size=64`}
        />
      </span>
    </h1>
    <h6>
      Its currently {xd} on {day} in {moment.tz.guess()}
    </h6>
  </div>
));

export default Page;
