import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faUserAlt,
  faTachometerAlt,
  faBriefcase,
  faHandshake,
  faEnvelope,
} from "@fortawesome/fontawesome-free-solid";
import Burger from "./Burger";

export default function Sidebar({ open, handleOpenClose, openModal }) {
  return (
    <div id="wrapperId" className={open ? 'wrapper' : 'active wrapper'}>
      <Burger open={open} handleOpenClose={handleOpenClose} />

      <div className="sidebar">
        <div className="profile">
          <img src="./images/profile.JPG" alt="profile_picture" />
          <h3>Asmaa Zaidane</h3>
          <p>Web Developer</p>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faDoorOpen} />
              </span>
              <span className="item">Welcome</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faUserAlt} />
              </span>
              <span className="item">About me</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faTachometerAlt} />
              </span>
              <span className="item">My experience</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span className="item">My work</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faHandshake} />
              </span>
              <span className="item">Testimonial</span>
            </a>
          </li>
          <li>
            <a href="#"  onClick={openModal}>
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="item">Contact me</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
