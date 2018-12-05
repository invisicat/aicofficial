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
const s = {
  background: colors.greyple,
  paddingTop: 10,
  paddingBottom: 10,
  borderColor: "#99AAB5"
};
const Header = () => (
  <div style={s}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="/archive">
      <a style={linkStyle}>Archive</a>
    </Link>
    <Link href="/udb">
      <a style={linkStyle}>Dashboard</a>
    </Link>
  </div>
);

export default Header;
