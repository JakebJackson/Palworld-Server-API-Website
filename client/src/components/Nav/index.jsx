import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { removeHyphensAndCapitalize } from '../../utils/helpers';

// eslint-disable-next-line react/prop-types
function Nav({ currentPage }) {
  const pages = ["setup", "faq"]

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item" key="home">
            <Link to="/" className={`nav-link ${currentPage === '/' && 'active'}`}>
              Home
            </Link>
          </li>
          {pages.map((Page) => (
            <li className="nav-item" key={Page}>
              <Link to={`/${Page}`} className={`nav-link ${currentPage === `/${Page}` && 'active'}`}>
                {removeHyphensAndCapitalize(Page)}
              </Link>
            </li>
          ))}
          <li className="nav-item" key="logout">
            <a href="/" className={`nav-link`} onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav nav-underline justify-content-end">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row">
      <nav className="navbar bg-dark mb-3 border-bottom border-4" data-bs-theme="dark">
        <div className="container-fluid">
          <h1 className="px-4 fs-1 text-light" href="/">Palworld API</h1>

          {showNavigation()}
        </div>
      </nav>
    </header>
  );
}

export default Nav;