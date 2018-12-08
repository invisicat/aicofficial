import Header from "./Header";
import colors from "../functions/discordColors.js";
import colorGen from "../functions/flatUIColorGenHEX.js";
const layoutStyle = {
  //  margin: 20,
  //  padding: 20,
  width: "100%",
  height: "100%",
  background: colorGen(),
  border: "2px solid black",
  fontFamily: "sans-serif"
};

const oof = {
  width: "100%",
  height: "100%",
  background: "white"
};
const Layout = props => (
  <html style={oof}>
    <link rel="icon" type="image/x-icon" href="/favicon-32x320.ico" />
    <div style={layoutStyle}>
      <title>Next.js - Home</title>
      <Header />
      {props.children}
    </div>
  </html>
);

export default Layout;
