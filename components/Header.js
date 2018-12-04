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
  border: "1px solid white",
  padding: 5
};
const s = {
  background: colors.greyple,
  paddingTop: 10,
  paddingBottom: 10,
  border: "groove",
  borderColor: "#99AAB5",
  borderRadius: 10
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
    <Link href="/login">
      <a style={linkStyle}>Login</a>
    </Link>
  </div>
);

export default Header;
