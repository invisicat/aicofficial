import Layout from "../../components/MyLayout.js";
import MathArray from "../../functions/MathArray.js";
import { withRouter } from "next/router";
import Link from "next/link";

const Page = withRouter(props => (
  <div>
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
      <b>Avatar (Discord CDN)</b>:{" "}
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
  </div>
));

export default Page;
