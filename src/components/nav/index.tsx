import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex bg-slate-700 py-2 px-4 items-center">
      <Link to="/">
      <h1 className="text-4xl text-white ml-auto mr-auto font-Jolly-Lodger" href="/">
        404 Pages
      </>
      </Link>
      <a href="https://github.com/ahmed-sudani/404-pages">
        <img src="/GitHub-Mark-Light-32px.png" alt="404-pages" />
      </a>
    </nav>
  );
};

export default Nav;
