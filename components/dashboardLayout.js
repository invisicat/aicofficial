import Header from "./dashboardHead.js";
import colors from "../functions/discordColors.js";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  background: colors.darkblack,
  fontFamily: "sans-serif"
};

const oof = {
  background: colors.black
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
