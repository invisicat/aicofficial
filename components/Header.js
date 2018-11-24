import Link from "next/link";
import "../CSS/Components/Header.css";

const Header = () => (
  <div className="main">
    <Link href="/">
      <a id="headA">Home</a>
    </Link>
    <Link href="/about">
      <a id="headA">About</a>
    </Link>
    <Link href="/contact">
      <a id="headA">Contact</a>
    </Link>
  </div>
);

export default Header;
