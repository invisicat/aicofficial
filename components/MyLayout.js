import Header from "./Header";
import colors from "../functions/discordColors.js";
const layoutStyle = {
  margin: 20,
  padding: 20,
  background: colors.dark,
  border: "1px solid white",
  fontFamily: "sans-serif"
};

const oof = {
  background: "#23272A"
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
