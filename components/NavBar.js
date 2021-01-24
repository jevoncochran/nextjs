import Link from "next/link";
// import "./NavBar.scss";

const NavBar = () => (
  <div className="nav">
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link href="/">
          <a className="nav-list-link">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        background: #333;
        color: #fff;
        list-style: none;
        display: flex;
      }

      ul li {
        font-size: 18px;
        margin-right: 20px;
      }

      ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default NavBar;
