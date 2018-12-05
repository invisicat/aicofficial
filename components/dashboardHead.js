import Link from "next/link";
import colors from "../functions/discordColors.js";
const linkStyle = {
  marginLeft: 10,
  marginRight: 15,
  fontFamily: "Arial",
  color: colors.dark,
  textAlign: "right",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: 5
};
const list = {
  listStyle: "none",
  color: "white",
  opacity: 1
};

const li = {
  listStyle: "none",
  display: "inline-block",
  rightAlign: "right",
  fontFamily: "Arial",
  padding: "5px 60px",
  transition: "1s ease-in-out"
};

const img = {
  borderRadius: 128,
  width: 32,
  height: 32,
  paddingRight: 20
};

const s = {
  background: colors.greyple,
  paddingTop: 25,
  textAlign: "right",
  paddingBottom: 25,
  borderColor: "#34495e"
};
const oof = {
  textAlign: "center"
};
const Header = () => (
  <div style={s}>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
    />
    <span>
      <span style={oof}>Thonking Bot</span>
    </span>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/">
      <a style={linkStyle}>Invite Bot!</a>
    </Link>
    <Link>SETTINGS</Link>
    <Link href="/logout">
      <a style={linkStyle}>Logout</a>
    </Link>
  </div>
);

export default Header;
