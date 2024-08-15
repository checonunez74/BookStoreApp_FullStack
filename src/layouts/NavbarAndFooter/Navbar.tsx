export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand"> OODevs</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="navbarNavDropdwon"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="collapse navbar-collapse"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdwon">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search Books
              </a>
            </li>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-1">
                <a type="button" className="btn btn-outline-light" href="#">
                  Sing in
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
