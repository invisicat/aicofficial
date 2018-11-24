import Header from "./Header";
import "../CSS/Components/MyLayout.css";

const Layout = props => (
  <div class="main">
    <title>My Site</title>
    <Header />
    {props.children}
  </div>
);

export default Layout;
