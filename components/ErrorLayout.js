import Header from "./Header";
import colors from "../functions/discordColors.js";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  borderRadius: 20,
  background: colors.greyple,
  fontFamily: "sans-serif"
};

const oof = {
  background: "white"
};
const Layout = props => (
  <html style={oof}>
    <link rel="icon" type="image/x-icon" href="/favicon-32x320.ico" />
    <div style={layoutStyle}>
      <title>Error - 404</title>
      <Header />
      {props.children}
    </div>
  </html>
);

export default Layout;
