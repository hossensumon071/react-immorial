import {useRef} from 'react';
import { Link } from 'react-router-dom';
import { useGsapDownStagger } from '../Hooks/gsap'

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const favRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [favRef];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.8);
  useGsapDownStagger(logoArr, 1.5);
  useGsapDownStagger(favArr, 1.8);

  return (
    <div>
      <nav className="navbar wrapper">
        <ul className="links">
          <li ref={li1}>
            <Link to="/featured">Featured</Link>
          </li>
          <li ref={li2}>
            <Link to="/about">About</Link>
          </li>
          <li ref={li3}>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        <div className="logo" ref={logoRef}>
          <Link to="/">
            <h2>Immemorial</h2>
          </Link>
        </div>
        <div className="favourit-link" ref={favRef}>
          <Link to="/favourites">Favourites</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;