import Header from "./dashboardHead.js";
import colors from "../functions/discordColors.js";
const alayoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  background: colors.darkblack,
  fontFamily: "sans-serif"
};

const oofa = {
  background: colors.black
};
const Layout = props => (
  <html style={oofa}>
    <link rel="icon" type="image/x-icon" href="/favicon-32x32.ico" />
    <div style={alayoutStyle}>
      <title>Next.js - Dashboard</title>
      <Header />
      {props.children}
    </div>
  </html>
);

export default Layout;
