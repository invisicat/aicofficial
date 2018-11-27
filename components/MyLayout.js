import Header from "./Header";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  background: "#2C2F33",
  fontFamily: "sans-serif"
};

const oof = {
  background: "#23272A"
};
const Layout = props => (
  <html style={oof}>
    <div style={layoutStyle}>
      <title>My Site</title>
      <Header />
      {props.children}
    </div>
  </html>
);

export default Layout;
