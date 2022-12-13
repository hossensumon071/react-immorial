import {useRef} from 'react';
import { Link } from 'react-router-dom';
import { useGsapDownStagger } from '../Hooks/gsap'

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const logoArr = [logoRef];

  useGsapDownStagger(liArr, 0.8);
  useGsapDownStagger(logoArr, 1.5);

  return (
    <div>
      <nav className="navbar wrapper">
        <div className="logo" ref={logoRef}>
          <Link to="/">
            <h2>armour</h2>
          </Link>
        </div>
        <ul className="links">
          <li className="link" ref={li1}>
            <Link to="/featured">Featured</Link>
          </li>
          <li className="link" ref={li2}>
            <Link to="/about">About</Link>
          </li>
          <li className="link" ref={li3}>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

export default Navbar;