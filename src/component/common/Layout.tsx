import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="sidebar">
      <nav className="navbar">
        <h1 className="logo">
          <span>Dev</span>challenges.io
        </h1>
        <ul className="nav-list">
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink to={'/input'}>Inputs</NavLink>
          </li>
        </ul>
      </nav>
      <main className="container">
        <Outlet />

        <p className="footer">
          Created By:{' '}
          <a
            href="https://devchallenges.io/portfolio/rohanmaharjan247"
            target="_blank"
          >
            @rohanmaharjan247
          </a>{' '}
          - devChallenges.io
        </p>
      </main>
    </div>
  );
};

export default Layout;
